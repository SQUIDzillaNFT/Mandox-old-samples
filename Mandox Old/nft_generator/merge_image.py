# import PIL module
from PIL import Image

rarityFileName = 'rarity0.txt'

def mergeImageAndSave(id, bodyFileName, faceFileName, hatFileName, armFileName, noseFileName, leftFileName, rightFileName, mouthFileName):
	file_body = f'Assets/body/{bodyFileName}.png'
	file_face = f'Assets/face/{faceFileName}.png'
	file_hat = f'Assets/hat/{hatFileName}.png'
	file_arm = f'Assets/arm/{armFileName}.png'
	file_nose = f'Assets/nose/{noseFileName}.png'
	file_left = f'Assets/left/{leftFileName}.png'
	file_right = f'Assets/right/{rightFileName}.png'
	file_mouth = f'Assets/mouth/{mouthFileName}.png'
	
	img_body = Image.open(file_body).convert("RGBA")
	img_face_mask = Image.open(file_face).convert("RGBA")
	img_face = Image.open(file_face).convert("RGB")
	img_hat_mask = Image.open(file_hat).convert("RGBA")
	img_hat = Image.open(file_hat).convert("RGB")
	img_arm_mask = Image.open(file_arm).convert("RGBA")
	img_arm = Image.open(file_arm).convert("RGB")
	img_nose_mask = Image.open(file_nose).convert("RGBA")
	img_nose = Image.open(file_nose).convert("RGB")
	img_left_mask = Image.open(file_left).convert("RGBA")
	img_left = Image.open(file_left).convert("RGB")
	img_right_mask = Image.open(file_right).convert("RGBA")
	img_right = Image.open(file_right).convert("RGB")
	img_mouth_mask = Image.open(file_mouth).convert("RGBA")
	img_mouth = Image.open(file_mouth).convert("RGB")
    
	img_body.paste(img_face, (0, 0), img_face_mask)
	img_body.paste(img_hat, (0, 0), img_hat_mask)
	img_body.paste(img_arm, (0, 0), img_arm_mask)
	img_body.paste(img_nose, (0, 0), img_nose_mask)
	img_body.paste(img_left, (0, 0), img_left_mask)
	img_body.paste(img_right, (0, 0), img_right_mask)
	img_body.paste(img_mouth, (0, 0), img_mouth_mask)
    
	img_body.save(f"GeneratedImages/test_new_{id}.png", format="png")