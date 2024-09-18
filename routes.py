from flask import render_template
from flask import current_app as app

def register_routes(app):
    @app.route("/")
    def home_route():
        # TODO: Fetch and display Spanish-English segments
        return render_template("home.html")
    
    @app.route("/submit", methods=["POST"])
    def submit_evaluation():
        # TODO: Handle form submission and store data in the database
        return "Evaluation submitted successfully!"