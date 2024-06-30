package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"regexp"

	"github.com/abadojack/whatlanggo"

	twitterscraper "github.com/n0madic/twitter-scraper"
)

// Request struct to parse JSON input
type Request struct {
	BrandNames []string `json:"brandnames"`
	MaxTweets  int      `json:"maxTweets"`
	Lang       string   `json:"lang"`
}

type Response struct {
	Tweets []string `json:"tweets"`
	Error  string   `json:"error,omitempty"`
}

func scrapeTweets(brandNames []string, lang string, maxTweets int) ([]string, error) {
	re := regexp.MustCompile(`(@\w+)|((http|https):\/\/[^\s]+)`)
	asciiRe := regexp.MustCompile(`[[:^print:]]`)
	languages := map[string]string{
		"en": "English",
		"ar": "Arabic",
	}

	scraper := twitterscraper.New()
	if !scraper.IsLoggedIn() {
		err := scraper.Login("anon.mhg.2003@gmail.com", "notscrapping")
		if err != nil {
			//scraper.Logout()
			return nil, err
		}
	}
	scraper.SetSearchMode(twitterscraper.SearchLatest)
	fmt.Println("Scraping...")

	tweets := []string{}
	totalTweets := 0
	for _, brandName := range brandNames {
		for tweet := range scraper.SearchTweets(context.Background(),
			brandName+" -filter:retweets", maxTweets) {
			if tweet.Error != nil {
				return nil, tweet.Error
			}
			//to remove urls @s
			cleanedTweet := re.ReplaceAllString(tweet.Text, "")
			//to remove emojis
			cleanedTweet = asciiRe.ReplaceAllString(cleanedTweet, "")
			tweetLang := whatlanggo.Detect(cleanedTweet).Lang.String()
			if tweetLang == languages[lang] {
				tweets = append(tweets, cleanedTweet)
				totalTweets++
			}
			if totalTweets >= maxTweets {
				return tweets, nil
			}
		}
	}

	fmt.Println("Scraping Done!")
	//scraper.Logout()
	return tweets, nil
}

func scrapeHandler(w http.ResponseWriter, r *http.Request) {
	var req Request
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	tweets, err := scrapeTweets(req.BrandNames, req.Lang, req.MaxTweets)
	resp := Response{Tweets: tweets}
	if err != nil {
		resp.Error = err.Error()
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(resp); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("/scrape", scrapeHandler)
	fmt.Println("Server is running on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
