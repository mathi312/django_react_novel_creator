class Novel:

    def __init__(self, t, d, a) :
        self.titel = t
        self.description = d
        self.author = a

    def setImage(self, ipath):
        self.imagePath = ipath

    def setChapterInfos(self, firstCh, lastCh, className, classType):
        self.firstCh = firstCh
        self.lastCh = lastCh
        self.className = className
        self.classType = classType
    
    def show(self):
        print(self.titel, end="\n\n")
        print(self.description, end="\n")
        print(self.imagePath)
