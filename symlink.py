import os
from pathlib import Path
import shutil

cwd = Path(os.getcwd())

kube_path = os.path.join(cwd.parents[3], "kubejs")

if os.path.exists(kube_path):
    shutil.rmtree(kube_path)
    
os.symlink(os.path.join(cwd, "kubejs"), kube_path)