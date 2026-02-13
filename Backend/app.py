from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# Replace with your actual DB info
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345670@localhost/simigra_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ----------------------------
# 📌 Models
# ----------------------------

class User(db.Model):
    __tablename__ = 'users'  
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    destination_city = db.Column(db.String(100))
    skills = db.Column(db.Text)
    education = db.Column(db.Text)
    cultural_preferences = db.Column(db.Text)
    created_at = db.Column(db.DateTime, server_default=db.func.now())


from datetime import datetime

class Job(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    company_name = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255))
    city = db.Column(db.String(100))
    salary_min = db.Column(db.Integer)
    salary_max = db.Column(db.Integer)
    job_type = db.Column(db.String(50))
    skills = db.Column(db.Text)
    description = db.Column(db.Text)
    posted_by = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Accommodation(db.Model):
    __tablename__ = 'accommodations'
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100))
    name = db.Column(db.String(200))
    type = db.Column(db.String(50))
    price_range = db.Column(db.String(50))
    address = db.Column(db.Text)
    contact = db.Column(db.String(20))
    image_url = db.Column(db.Text)
    description = db.Column(db.Text)
    distance_from_center = db.Column(db.String(50))
    rating = db.Column(db.Float)
    reviews_count = db.Column(db.Integer)


class FoodService(db.Model):
    __tablename__ = 'food_services'
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100))
    name = db.Column(db.String(255))
    rating = db.Column(db.Float)
    cuisines = db.Column(db.String(500))
    price_for_two = db.Column(db.String(50))
    location = db.Column(db.String(255))
    distance_km = db.Column(db.Float)
    offer = db.Column(db.String(255))
    image_url = db.Column(db.String(500))


class CulturalResource(db.Model):
    __tablename__ = 'cultural_resources'
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100))
    language = db.Column(db.String(50))
    guide_url = db.Column(db.Text)
    description = db.Column(db.Text)
    
class TransportOption(db.Model):
    __tablename__ = 'transport_options'
    
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100), nullable=False)
    mode = db.Column(db.String(50), nullable=False)     
    base_fare = db.Column(db.Numeric(10, 2), nullable=False)  
    per_km = db.Column(db.Numeric(10, 2), nullable=False)     
    description = db.Column(db.Text)   

# ----------------------------
# 📌 Routes — Basic
# ----------------------------

@app.route('/')
def home():
    return "✅ SIMIGRA backend is running!"

# ----------------------------
# 📌 Signup & Login (optional)
# ----------------------------

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_pw = generate_password_hash(data['password'])
    new_user = User(
        name=data['name'],
        email=data['email'],
        password_hash=hashed_pw,
        destination_city=data['destination_city'],
        skills=data['skills'],
        education=data['education'],
        cultural_preferences=data.get('cultural_preferences', '')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password_hash, data['password']):
        return jsonify({'message': 'Login successful!', 'user_id': user.id})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    
@app.route('/api/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'destination_city': user.destination_city,
        'skills': user.skills,
        'education': user.education,
        'cultural_preferences': user.cultural_preferences
    })

@app.route('/api/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    data = request.json
    user.name = data.get('name', user.name)
    user.destination_city = data.get('destination_city', user.destination_city)
    user.skills = data.get('skills', user.skills)
    user.education = data.get('education', user.education)
    user.cultural_preferences = data.get('cultural_preferences', user.cultural_preferences)
    
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})

# ----------------------------
# 📌 API: Get Jobs by City
# ----------------------------

@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    jobs = Job.query.filter_by(city=city).all()
    result = []
    for job in jobs:
        result.append({
            'id': job.id,
            'title': job.title,
            'company_name': job.company_name,
            'location': job.location,
            'city': job.city,
            'salary_min': job.salary_min,
            'salary_max': job.salary_max,
            'job_type': job.job_type,
            'skills': job.skills,
            'description': job.description,
            'posted_by': job.posted_by,
            'is_active': job.is_active,
            'created_at': job.created_at.isoformat() if job.created_at else None
        })
    return jsonify(result)


# ----------------------------
# 📌 API: Get Accommodation by City
# ----------------------------

@app.route('/api/accommodations', methods=['GET'])
def get_accommodations():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    accs = Accommodation.query.filter_by(city=city).all()
    result = []
    for acc in accs:
        result.append({
            'id': acc.id,
            'city': acc.city,
            'name': acc.name,
            'type': acc.type,
            'price_range': acc.price_range,
            'address': acc.address,
            'contact': acc.contact,
            'image_url': acc.image_url,
            'description': acc.description,
            'distance_from_center': acc.distance_from_center,
            'rating': acc.rating,
            'reviews_count': acc.reviews_count
        })
    return jsonify(result)


# ----------------------------
# 📌 API: Get Food Services by City
# ----------------------------

@app.route('/api/food', methods=['GET'])
def get_food():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    foods = FoodService.query.filter_by(city=city).all()
    result = []
    for f in foods:
        result.append({
            'id': f.id,
            'city':f.city,
            'name': f.name,
            'rating': f.rating,
            'cuisines': f.cuisines,
            'price_for_two': f.price_for_two,
            'location': f.location,
            'distance_km': f.distance_km,
            'offer': f.offer,
            'image_url': f.image_url
        })
    return jsonify(result)


# ----------------------------
# 📌 API: Get Cultural Resources by City
# ----------------------------

@app.route('/api/culture', methods=['GET'])
def get_culture():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    resources = CulturalResource.query.filter_by(city=city).all()
    result = []
    for res in resources:
        result.append({
            'id': res.id,
            'city':res.city,
            'language': res.language,
            'guide_url': res.guide_url,
            'description': res.description
        })
    return jsonify(result)

# ----------------------------
# 📌 API: Get Transport Options by City
# ----------------------------

@app.route('/api/transport', methods=['GET'])
def get_transport():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    options = TransportOption.query.filter_by(city=city).all()
    result = []
    for opt in options:
        result.append({
            'id': opt.id,
            'city': opt.city,
            'mode': opt.mode,
            'base_fare': float(opt.base_fare),  # convert from Decimal to float
            'per_km': float(opt.per_km),        # convert from Decimal to float
            'description': opt.description
        })
    return jsonify(result)

# ----------------------------
# 📌 Run App
# ----------------------------

if __name__ == '__main__':
    app.run(debug=True)
