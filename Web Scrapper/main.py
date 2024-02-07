from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import time
import os

def getResReview(driver,url):
    # Initialize the WebDriver
    driver.get(url) 
    time.sleep(2)
    try:
        xpath = "/html/body/div/div[4]/div[1]/div/div/div/div[3]/div/div[1]/div/div/div[2]/button"
        element = driver.find_element(By.XPATH, xpath)
        element.click()
        time.sleep(1)
        Restaurant= driver.find_element(By.CSS_SELECTOR,'[data-testid="restaurant-title"]').text.split('\n')[0]
        print(Restaurant)
    except Exception as e:
        return
    #selector = "#__next > div:nth-child(4) > div.sc-c2e9abd4-0.jNQZcm > div > div > div > div.mt-2 > div > div.b-b.mb-4 > div > div > div:nth-child(2) > button"
    while True:
        try:
            load_more_button = driver.find_element(By.CSS_SELECTOR, '[data-testid="btn-load-more"]')
            load_more_button.click()
            time.sleep(1)  # Wait for the page to load
        except Exception as e:
            # Scrape the reviews
            reviews_data = []
            review_elements = driver.find_elements(By.CSS_SELECTOR, '[data-testid="reviews-item-component"]')

            for review_element in review_elements:
                name = review_element.find_element(By.CSS_SELECTOR, '[data-testid="customer-name"]').text
                rating = review_element.find_element(By.CSS_SELECTOR, '.ml-1.undefined').text
                review = review_element.find_element(By.CSS_SELECTOR, '[data-testid="customer-review"]').text
                date = review_element.find_element(By.CSS_SELECTOR, '.dark-gray.ml-auto').text
                reviews_data.append([Restaurant,name, date, rating, review])

            # # Close the WebDriver
            #driver.quit()

            # Create a DataFrame and save to CSV
            df = pd.DataFrame(reviews_data, columns=['Restaurant','Customer','Date', 'Rating', 'Review'])
            csv_file_path = "reviews.csv"
            df.to_csv(csv_file_path, mode='a',encoding='utf-8-sig', index=False, header=not os.path.isfile(csv_file_path))
            #df.to_csv('reviews.csv', index=False,encoding='utf-8-sig')
            print("Reviews saved to 'reviews.csv'")
            break

    # url will be all restaurants available in certain location
def getAllResInLocation(url):
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(2)
    li_element = driver.find_element(By.CSS_SELECTOR,"li.sc-1b71585b-0.sc-1b71585b-2.bqafA-D.hEGBfg.-last")

        # Retrieve the value of the last page
    page_number = li_element.find_element(By.TAG_NAME,"a").get_attribute("page")

    reslinks=[]
    print(page_number)  
    for _ in range(int(page_number)-1):
        #driver.get(url+"page?="+str(i))
        a_elements = driver.find_elements(By.CSS_SELECTOR,"a[data-testid='restaurant-a']")
        link = [a_element.get_attribute("href") for a_element in a_elements]
        reslinks.extend(link)
        next_button = driver.find_element(By.CSS_SELECTOR,"a[aria-label='Go to next page']")
        time.sleep(1)

        if next_button is not None:
            next_page_link = next_button.get_attribute("href")
            next_button.click()
    reslinks = list(set(reslinks))
    print(len(reslinks))
    for i in range(len(reslinks)):
        print(reslinks[i])
    driver.quit()
    return reslinks

# https://www.talabat.com/egypt/grocery/700118/abu-auf-tagammoa-5--emaar-mivida?aid=7844  

reslinks = getAllResInLocation("https://www.talabat.com/egypt/restaurants/7876/new-maadi-al-sarayaat")

driver = webdriver.Chrome()  

for i in range(len(reslinks)):
    print(i+1)
    getResReview(driver,reslinks[i])

driver.quit()
