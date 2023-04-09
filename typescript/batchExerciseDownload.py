import os
import requests
import subprocess
import argparse

def download_exercise(exercise):
    cmd = ["exercism", "download", "--track=typescript", f"--exercise={exercise}"]
    subprocess.run(cmd)

def main(count=None):
    base_url = "https://api.github.com/repos/exercism/typescript/contents/exercises/practice"
    response = requests.get(base_url)
    exercises = response.json()

    downloaded_count = 0

    for exercise in exercises:
        exercise_name = exercise["name"]
        if os.path.exists(exercise_name):
            print(f"Skipping {exercise_name}: already exists")
            continue

        if count is not None and downloaded_count >= count:
            break

        print(f"Downloading {exercise_name}")
        download_exercise(exercise_name)
        downloaded_count += 1

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Download TypeScript Exercism exercises.")
    parser.add_argument("--count", type=int, help="Number of new exercises to download.")
    args = parser.parse_args()

    main(args.count)
