from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/acceso')
def access():
    return render_template('acceso.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/service')
def service():
    return render_template('service.html')

@app.route('/product')
def product():
    return render_template('product.html')

