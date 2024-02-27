from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException,TimeoutException


from selenium.webdriver.chrome.service import Service

import pandas as pd
import time
import os

from langdetect import detect


def detect_language(text):
    try:
        lang = detect(text)
    except:
        lang = 'unknown'
    return lang

def getResReview(driver,url):
    # Initialize the WebDriver
        driver.get(url) 
        time.sleep(2)
        Restaurant = driver.find_element(By.CSS_SELECTOR,'h1.title').text
        
        last_li_item = driver.find_element(By.CSS_SELECTOR,
                        'ul#restaurant-tabs-nav li:last-child')
        link = last_li_item.find_element(By.TAG_NAME, 'a')
        link.click()
        time.sleep(2)
        total_revs = driver.find_element(By.CSS_SELECTOR,'h2.tl-reviews__count').text.split(' ')
        print("Total Restaurant Reviews:",total_revs)
        total_revs = int(total_revs[0])
        print(Restaurant)
        review_elements =[]
        reviews_data = []
        
        load_more_button = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, 'button.btn.btn-primary.btn--load-more'))
        )
        numClicksNeeded = (total_revs//20)
        numClicks = numClicksNeeded if numClicksNeeded<=50 else 50
        
        for i in range(numClicks):
            try:
                load_more_button.click()
                time.sleep(1)  # Adjust the wait time as needed
            except TimeoutException as e:
                print("Timeout at ",i)
            except Exception as e:
                 print("Error at ",i)
        
        review_elements = WebDriverWait(driver, 5).until(
                EC.presence_of_all_elements_located((By.CLASS_NAME, 'review'))
            )
            

    
        for review_element in review_elements:
            name = review_element.find_element(By.CSS_SELECTOR, '.review__name').text
            rating = len(review_element.find_elements(By.XPATH, ".//ul[@class='rate-stars review__rating']/li[@class='star active']"))
            review = review_element.find_element(By.CSS_SELECTOR, 'div.review__comment.wrap-word p').text
                    #lang = detect_language(review); 
        #   print(rating,name,review)
            date = review_element.find_element(By.CLASS_NAME, 'review__time').text
            reviews_data.append([Restaurant,name, date, rating, review])
            
                # # Close the WebDriver
                #driver.quit()

                # Create a DataFrame and save to CSV
        #print(len(reviews_data))
        df = pd.DataFrame(reviews_data, columns=['Restaurant','Customer','Date', 'Rating', 'Review'])
        csv_file_path = "elmenus\\newreviews.csv"
        df.to_csv(csv_file_path, mode='a',encoding='utf-8-sig', index=False, header=not os.path.isfile(csv_file_path))
                        #df.to_csv('reviews.csv', index=False,encoding='utf-8-sig')
        print(len(review_elements),"Reviews saved to 'reviews.csv'")


def scroll_and_click(element):
        driver.execute_script("arguments[0].scrollIntoView();", element)
        element.click()

    # url will be all restaurants available in certain location
def getAllResInLocation(url):
    options = webdriver.ChromeOptions()
    #C:\Users\menna\AppData\Local\Google\Chrome\User Data
    #dir_path = os.getcwd()

    options.add_argument(r'--user-data-dir=C:\Users\menna\AppData\Local\Google\Chrome\User Data\Profile 2')
    options.add_argument(r'--profile-directory=Profile 2')  # Specify profile directory if necessary
    driver = webdriver.Chrome(options=options)

    driver.get(url)
    #loginbtn = driver.find_element(By.XPATH,"/html/body/div/div[1]/div/div/div[4]/ul[1]/li[6]/button")
    #loginbtn.click()
    

    time.sleep(3)
    reslinks={}
    h3_element = driver.find_element(By.CLASS_NAME, 'col-title.inline-block span')

    #span_element = h3_element.find_element(By.TAG_NAME, 'span')

    resNums = int(h3_element.text.strip(' ').strip('(').strip(')'))
    print("Total Restaurants Available",resNums)
    
    numofClicks = int(resNums)//12 + 3
    for i in range(20):
        try:
            load_more_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'button.btn.btn-primary.load-more-btn')))
            #scroll_and_click(load_more_button)
            load_more_button.click()
            WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'div.card-content.clickable-item a')))
        except TimeoutException as e:
            print("TimeOUT at",i)
            break
        except Exception as e:
            print("Error occurred while clicking 'Load More' button:", e)
            return

    reslinks = driver.find_elements(By.CSS_SELECTOR, 'div.card-content.clickable-item a')
    reslinks = [element.get_attribute('href') for element in reslinks]
    reslinks = list(dict.fromkeys(reslinks))
    print(len(reslinks)," Restaurants retrieved")
    print(reslinks)
    driver.quit()

    return reslinks

#reslinks = getAllResInLocation("https://www.elmenus.com/cairo/delivery/nasr-city-3")

driver = webdriver.Chrome()  


#
#     print(i+1)

#papajohns & Prego& Mcdonalds need diff chrome driver

reslinks = [  
     'https://www.elmenus.com/cairo/samiha-x3nk', 'https://www.elmenus.com/cairo/sheffa-al-orman-z7vv2', 'https://www.elmenus.com/cairo/shalaolao-95gro', 'https://www.elmenus.com/cairo/baogr-temp-closed--6r36q', 'https://www.elmenus.com/cairo/freddys-wqx58', 'https://www.elmenus.com/cairo/purellas-restaurant-closed--dolv7', 'https://www.elmenus.com/cairo/chicken-basket--wqrl7', 'https://www.elmenus.com/cairo/ayadina-k6zo', 'https://www.elmenus.com/cairo/bakery-khan-myl7l', 'https://www.elmenus.com/cairo/bosporus-yl27', 'https://www.elmenus.com/cairo/sky-sushi-xpd5v', 'https://www.elmenus.com/cairo/smashed-bun-temp-closed--aq546', 'https://www.elmenus.com/cairo/macaroma-3q4z3', 'https://www.elmenus.com/cairo/pie-station-vk2k2', 'https://www.elmenus.com/cairo/wingy-xv87k', 'https://www.elmenus.com/cairo/b82-temp-closed--g4qpg', 'https://www.elmenus.com/cairo/grace-pizza-temp-closed--nw7zk', 'https://www.elmenus.com/cairo/el-aseil-d63x', 'https://www.elmenus.com/cairo/shawerma-empire-temp-closed--79r47', 'https://www.elmenus.com/cairo/salad-master-ywll6', 'https://www.elmenus.com/cairo/grumpy-temp-closed--z76k8', 'https://www.elmenus.com/cairo/belal-o2ry', 'https://www.elmenus.com/cairo/grand-kunafa-8apk', 'https://www.elmenus.com/cairo/blaze-resto-8vzw', 'https://www.elmenus.com/cairo/abo-hamza-3lrv7', 'https://www.elmenus.com/cairo/heart-attack-zmq2y', 'https://www.elmenus.com/cairo/el-sharkawy-el-asly-zmk6k', 'https://www.elmenus.com/cairo/panda-house-wakk', 'https://www.elmenus.com/cairo/haty-el-sheikh-xxwv', 'https://www.elmenus.com/cairo/balad-el-ghareb-zm69o', 'https://www.elmenus.com/cairo/amazing-sushi-p6xak', 'https://www.elmenus.com/cairo/la-poire-y6ma', 'https://www.elmenus.com/cairo/el-diwan-temp-closed--do4lg', 'https://www.elmenus.com/cairo/chickana-r739x', 'https://www.elmenus.com/cairo/la-poire-cafe-339d', 'https://www.elmenus.com/cairo/aleppos-shawerma-7zag', 'https://www.elmenus.com/cairo/shawermer-mndd', 'https://www.elmenus.com/cairo/cinnabon-bakery-cafe-8zw2', 'https://www.elmenus.com/cairo/the-bogos-gmnv4', 'https://www.elmenus.com/cairo/bouza-roll-9wwk', 'https://www.elmenus.com/cairo/koshary-masr-temp-closed--z773k', 'https://www.elmenus.com/cairo/ashraf-farghaly-a8r6', 'https://www.elmenus.com/cairo/elmalky-2xg3', 'https://www.elmenus.com/cairo/crepe-spicy-44x7n', 'https://www.elmenus.com/cairo/cilantro-w2qk', 'https://www.elmenus.com/cairo/beanos-cafe-957l', 'https://www.elmenus.com/cairo/anas-al-demashky-qr3r', 'https://www.elmenus.com/cairo/la-pomme-pastries-rwl7', 'https://www.elmenus.com/cairo/tafwela-3q4pd', 'https://www.elmenus.com/cairo/starbucks%C2%AE-coffee-qzk7', 'https://www.elmenus.com/cairo/ihopa-gzlx', 'https://www.elmenus.com/cairo/bazooka-myp8d', 'https://www.elmenus.com/cairo/safi-2ynv', 'https://www.elmenus.com/cairo/el-balakona--qoyy7', 'https://www.elmenus.com/cairo/tom-and-basal-ln23', 'https://www.elmenus.com/cairo/fatouta-w2o57', 'https://www.elmenus.com/cairo/feteera-el-emam-o726y', 'https://www.elmenus.com/cairo/choco-panda-yvvad', 'https://www.elmenus.com/cairo/waffle-chocolate-l7qzg', 'https://www.elmenus.com/cairo/wahet-el-mahrosa-temp-closed--knkro', 'https://www.elmenus.com/cairo/hadramot-anas-2lnn8', 'https://www.elmenus.com/cairo/halla-beirut-d7xox', 'https://www.elmenus.com/cairo/zacks-fried-chicken-wmnk', 'https://www.elmenus.com/cairo/cheese-lake-6zn2o', 'https://www.elmenus.com/cairo/deja-vu-4onwx', 'https://www.elmenus.com/cairo/manchow-wok-6dzr', 'https://www.elmenus.com/cairo/ono-sushi-l7wmg', 'https://www.elmenus.com/cairo/chicken-cigar-temp-closed--28dk8', 'https://www.elmenus.com/cairo/second-cup-lz53', 'https://www.elmenus.com/cairo/country-sushi-2ln73', 'https://www.elmenus.com/cairo/dixie-cream-donuts-temp-closed--3454', 'https://www.elmenus.com/cairo/gelato-mio-glpx', 'https://www.elmenus.com/cairo/amo-hosny-3nox', 'https://www.elmenus.com/cairo/al-mazen--pqqr', 'https://www.elmenus.com/cairo/zain-el-shamy-temp-closed--5km8', 'https://www.elmenus.com/cairo/kababgy-el-menoufy-5k6o', 'https://www.elmenus.com/cairo/steak-out-heliopolis-temp-closed--mrko', 'https://www.elmenus.com/cairo/leila-qzgr', 'https://www.elmenus.com/cairo/koko-oriental-wa97', 'https://www.elmenus.com/cairo/fathy-grills-k2zo', 'https://www.elmenus.com/cairo/golden-fish-5rw8', 'https://www.elmenus.com/cairo/bibito-qrdr', 'https://www.elmenus.com/cairo/ogrill-xm25', 'https://www.elmenus.com/cairo/kukuruza-gourmet-popcorn-temp-closed--5a6o', 'https://www.elmenus.com/cairo/la-pizza-alforno-vp87', 'https://www.elmenus.com/cairo/skalans-3796', 'https://www.elmenus.com/cairo/mandena-pnvr', 'https://www.elmenus.com/cairo/coppermelt--6o7n', 'https://www.elmenus.com/cairo/coco-restaurant-3pzd', 'https://www.elmenus.com/cairo/iskandarany-w5kk', 'https://www.elmenus.com/cairo/beit-ward-6a6o', 'https://www.elmenus.com/cairo/the-smith-gwgy', 'https://www.elmenus.com/cairo/3cooks-apg8', 'https://www.elmenus.com/cairo/tagen-gywy', 'https://www.elmenus.com/cairo/haty-al-sahaba-pplk', 'https://www.elmenus.com/cairo/best-way--x5on', 'https://www.elmenus.com/cairo/buffalo-wings-rings-39p3', 'https://www.elmenus.com/cairo/estacoza-fish-z27m', 'https://www.elmenus.com/cairo/sovrano-77xv', 'https://www.elmenus.com/cairo/mashweyat-el-sultan-zan8', 'https://www.elmenus.com/cairo/qamar-elsham-r8g5', 'https://www.elmenus.com/cairo/warda--qo9lr', 'https://www.elmenus.com/cairo/dolphin-fish--3adx', 'https://www.elmenus.com/cairo/al-matarawy-wwo7', 'https://www.elmenus.com/cairo/hadramot-restaurants--v47g', 'https://www.elmenus.com/cairo/dr-diet-do9xm', 'https://www.elmenus.com/cairo/viaggio-temp-closed--dla5', 'https://www.elmenus.com/cairo/pasta-factory-q24g', 'https://www.elmenus.com/cairo/odonuts-temp-closed--gkax', 'https://www.elmenus.com/cairo/smashburger-temp-closed--k8vx', 'https://www.elmenus.com/cairo/tasaheel-r7q27', 'https://www.elmenus.com/cairo/el-waseem-al-suri-odk8', 'https://www.elmenus.com/cairo/pizza-club-temp-closed--nygg', 'https://www.elmenus.com/cairo/el-tayb-99p9', 'https://www.elmenus.com/cairo/el-haramen-7lap', 'https://www.elmenus.com/cairo/farah-9yq9', 'https://www.elmenus.com/cairo/the-burger-temp-closed--mynnp', 'https://www.elmenus.com/cairo/rady-nz37', 'https://www.elmenus.com/cairo/candy-rush-ywolg', 'https://www.elmenus.com/cairo/anwar-el-sham-aw5py', 'https://www.elmenus.com/cairo/chocolate-house--do92g', 'https://www.elmenus.com/cairo/freedom-n933k', 'https://www.elmenus.com/cairo/geeks-burgers-temp-closed--4474n', 'https://www.elmenus.com/cairo/nisantasi-958x6', 'https://www.elmenus.com/cairo/geziert-al-asmak--6r69n', 'https://www.elmenus.com/cairo/cook-cake--3lwq4', 'https://www.elmenus.com/cairo/dragon-wok-temp-closed--lqk84', 'https://www.elmenus.com/cairo/locanda--r7k8w', 'https://www.elmenus.com/cairo/am-bahbah-r7ddz', 'https://www.elmenus.com/cairo/crepe-house-6rpgr', 'https://www.elmenus.com/cairo/dudes-fried-chicken-temp-closed--gmdpn', 'https://www.elmenus.com/cairo/chocolate-island-temp-closed--3lo3x', 'https://www.elmenus.com/cairo/sharkawy-abbass-el-akkad--6ragn', 'https://www.elmenus.com/cairo/asmak-el-shate2-awa56', 'https://www.elmenus.com/cairo/shrimp-house-temp-closed--ywgrd', 'https://www.elmenus.com/cairo/el-madina-restaurant--aw388', 'https://www.elmenus.com/cairo/kebdt-al-falah--lq3n2', 'https://www.elmenus.com/cairo/pizza-bab-el-khalk--3lxad', 'https://www.elmenus.com/cairo/nagoya-sushi-o72oy', 'https://www.elmenus.com/cairo/haty-ahmed-nada-gm6gg', 'https://www.elmenus.com/cairo/haty-el-mallem-7m6mg', 'https://www.elmenus.com/cairo/fork--lqdll', 'https://www.elmenus.com/cairo/8-am-restaurant-p68on', 'https://www.elmenus.com/cairo/just-frakh-temp-closed--959mo', 'https://www.elmenus.com/cairo/genuine-broaster-chicken-95gz6', 'https://www.elmenus.com/cairo/el-ameed-lqyy3', 'https://www.elmenus.com/cairo/al-shorfa-temp-closed--8wd2g', 'https://www.elmenus.com/cairo/flamingo-sushi-zmkx2', 'https://www.elmenus.com/cairo/hookah-lounge-awzar', 'https://www.elmenus.com/cairo/dodz-fried-chicken-wqlmk', 'https://www.elmenus.com/cairo/numa-italian-eatery-59d3g', 'https://www.elmenus.com/cairo/lilos-temp-closed--o7395', 'https://www.elmenus.com/cairo/chickenza--o7z45']

for i in range(len(reslinks)):
    try:
         getResReview(driver,reslinks[i])
    finally:
         continue

driver.quit()
