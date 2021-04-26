.PHONY: install dev generate start build deploy publish

# ################################################
# Development ####################################
# ################################################

install: # Install all dependencies
	npm ci

dev: # Start Nuxt for local development
	npm run dev

generate: # Build static site
	npm run generate

start: # Serve static files
	npm run start

build: # Build app
	npm run build

# ################################################
# Deploy #########################################
# ################################################

deploy:
	vercel

publish:
	vercel --prod
