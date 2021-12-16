import os

path = input('')

fileList = os.listdir(path)

n = 0
for i in fileList:
    oldname = path + os.sep + fileList[n]

    # newname = path + os.sep + 'BellTower' + str(n + 1) + '.jpg'
    # newname = path + os.sep + 'LightHouse' + str(n + 1) + '.jpg'
    # newname = path + os.sep + 'StatueMan' + str(n + 1) + '.jpg'
    # newname = path + os.sep + 'UCSC' + str(n + 1) + '.jpg'
    newname = path + os.sep + 'Garden' + str(n + 1) + '.jpg'

    os.rename(oldname, newname)
    print(oldname, '======>', newname)

    n += 1
