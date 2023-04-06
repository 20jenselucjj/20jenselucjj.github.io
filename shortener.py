from flask import Flask, request, redirect
import string
import random

app = Flask(__name__)

# Store mappings of short URLs to long URLs
url_mapping = {}

# Function to generate a random string of given length
def generate_random_string(length):
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))

# Endpoint to create a shortened URL
@app.route('/shorten', methods=['POST'])
def shorten():
    long_url = request.form['long_url']
    short_id = generate_random_string(6) # Generate a random string of length 6 for short URL
    url_mapping[short_id] = long_url # Store the mapping of short URL to long URL
    short_url = request.host_url + short_id # Construct the short URL with the host URL and short ID
    return short_url

# Endpoint to redirect to the original long URL
@app.route('/<short_id>')
def redirect_to_long_url(short_id):
    long_url = url_mapping.get(short_id)
    if long_url:
        return redirect(long_url)
    else:
        return 'Short URL not found', 404

if __name__ == '__main__':
    app.run(debug=True)

