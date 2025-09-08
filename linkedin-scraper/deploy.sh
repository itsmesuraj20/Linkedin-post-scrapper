#!/bin/bash
# Example deployment script
# Build and deploy backend
cd server && docker build -t linkedin-scraper-backend .
# Build and deploy frontend
cd ../client && docker build -t linkedin-scraper-frontend .
# Push images to registry (replace with your registry)
# docker push <your-registry>/linkedin-scraper-backend
# docker push <your-registry>/linkedin-scraper-frontend
