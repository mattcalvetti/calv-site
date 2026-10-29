# Copies index.html into one folder per view so clean paths load (and refresh) with HTTP 200.
# Re-run after editing index.html: python3 gen-paths.py
import os
VIEWS=["about","timeline","cos","beyond","work","board","signals","thinking"]
src=open("index.html").read()
for v in VIEWS:
    os.makedirs(v,exist_ok=True)
    open(f"{v}/index.html","w").write(src)
print("wrote",len(VIEWS))
