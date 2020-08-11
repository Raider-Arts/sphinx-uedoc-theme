import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="sphinx-uedoc-theme", # Replace with your own username
    version="0.1.0",
    author="Luca Faggion",
    author_email="luc-af@live.it",
    description="Unreal engine documentation theme for Python Sphinx",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Raider-Arts/sphinx-uedoc-theme",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)