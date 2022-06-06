import random
from merge_image import mergeImageAndSave
count = 3334

def getName():
  n = random.randrange(8)
  if n == 0:
    return 'grey'
  elif n == 1:
    return 'brown'
  elif n == 2:
    return 'red'
  elif n == 3:
    return 'orange'
  elif n == 4:
    return 'yellow'
  elif n == 5:
    return 'green'
  elif n == 6:
    return 'blue'
  elif n == 7:
    return 'purple'
  
if __name__ == '__main__':
  for i in range(count):
    print(i)
    armFileName = getName()
    bodyFileName = getName()
    faceFileName = getName()
    hatFileName = getName()
    leftFileName = getName()
    mouthFileName = getName()
    noseFileName = getName()
    rightFileName = getName()
    flag = False
    try:
      file = open("testMetadata.txt", 'r', encoding='utf-8')
      Lines = file.readlines()
      file.close()
      writeString = "(%s) (%s) (%s) (%s) (%s) (%s) (%s) (%s)\n" % (bodyFileName, faceFileName, hatFileName, armFileName, noseFileName, leftFileName, rightFileName, mouthFileName)
      for line in Lines:
        if line == writeString:
          flag = True
          break  
    except IOError:
      print("Error: File does not appear to exist.")
    if flag == False:
      f = open("testMetadata.txt", "a", encoding='utf-8')
      f.write("(%s) (%s) (%s) (%s) (%s) (%s) (%s) (%s)\n" % (bodyFileName, faceFileName, hatFileName, armFileName, noseFileName, leftFileName, rightFileName, mouthFileName))
      f.close()
      mergeImageAndSave(i + 6666, bodyFileName, faceFileName, hatFileName, armFileName, noseFileName, leftFileName, rightFileName, mouthFileName)

