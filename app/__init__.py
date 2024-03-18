
import os
from flask import Flask

# Obtener la ruta completa de la carpeta 'ice-cream-shop-website-template'
template_folder = "C:\\Users\\imale\\Downloads\\sweetnanny\\ice-cream-shop-website-template"

# Crear la aplicación Flask con la ruta de la carpeta de plantillas personalizada
app = Flask(__name__, template_folder=template_folder)

