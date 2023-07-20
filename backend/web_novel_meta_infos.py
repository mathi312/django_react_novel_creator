from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from novel import Novel
from bing_image_downloader.downloader import download

class WebNovelMetaInfos:

    def getTitleAndDescription(url):
        if not url.startswith('https://www.novelupdates.com/series/'): 
            print("given url not valid, please enter a valid url!")
            return 
        
        driver = webdriver.Chrome()

        driver.get(f"https://webcache.googleusercontent.com/search?q=cache:{url}")
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'//button[text()="Zustimmen und fortfahren"]'))).click()

        titel = driver.find_element(By.CLASS_NAME, 'seriestitlenu').text
        description = driver.find_element(By.ID, 'editdescription').text
        author = driver.find_element(By.ID, 'authtag').text

        driver.close()

        imagePath = WebNovelMetaInfos.downloadimage(titel)
       
        novel = Novel(titel, description, author)
        novel.setImage(imagePath)
        novel.show()
        return novel
    

    def downloadimage(titel):
        download(titel, limit=1,  output_dir='/Users/mathi/OneDrive/Dokumente/ProgrammingProjects/webnovelscraper/public/images/', filter='photo', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)
        imagepath = '/Users/mathi/OneDrive/Dokumente/ProgrammingProjects/webnovelscraper/public/images/' + titel +'/Image_1.jpg'
        return imagepath
