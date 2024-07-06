import spacy
from collections import Counter
import string

from mongo.models import Platform

nlp = spacy.load('en_core_web_sm')

def extract_top_adjectives(reviews, top_n=5):
    adj_counts = {
        'Talabat': Counter(),
        'Twitter': Counter(),
        'Elmenus': Counter()
    }
    
    for platform, review_set in reviews.items():
        for text in review_set:
            doc = nlp(text.lower())  
            
            filtered_tokens = [token for token in doc if token.text not in string.punctuation and not token.is_space]
            
            negation = False
            negation_words = {"not", "no", "n't"}

            for token in filtered_tokens:
                if token.pos_ == 'ADJ':
                    if negation:
                        adj_counts[platform][token.lemma_] -= 1  
                    else:
                        adj_counts[platform][token.lemma_] += 1  
                
                if token.text in negation_words:
                    negation = True
                elif token.dep_ == 'neg':
                    negation = True
                elif token.pos_ == 'VERB' and token.lemma_ == 'be' and token.head.dep_ == 'neg':
                    negation = True
                else:
                    negation = False
    #sorting desc    
    top_adjectives = {}
    for platform, counts in adj_counts.items():
        top_adjectives[platform] = counts.most_common(top_n)

    return top_adjectives

def format_result(adjectives_counts):
    result = {}
    
    #collecting all unique adjs from all platforms
    all_adjectives = set()
    for platform, adjectives in adjectives_counts.items():
        for adj, count in adjectives:
            if count > 0:  # Exclude negative counts
                all_adjectives.add(adj)
    
    for adj in all_adjectives:
        result[adj] = {platform.value: 0 for platform in Platform}
    
    for platform, adjectives in adjectives_counts.items():
        for adj, count in adjectives:
            if count > 0:  # Exclude negative counts
                result[adj][platform] = count
    
    return result

# EXAMPLE
reviews = {
    "Talabat": [
        "food was pretty bad"
    ],
    "Twitter": [
        "satisfied with their speed",
        "drinks were made  bad"
    ],
    "Elmenus": [
        "price was not good"
    ]
}

top_adjectives = extract_top_adjectives(reviews, top_n=5)

platforms = ['Talabat', 'Twitter', 'Elmenus']

# RETURN THIS
#formatted_result = format_result(top_adjectives)

#print(formatted_result)
