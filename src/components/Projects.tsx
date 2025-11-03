import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Based Heart Disease Prediction System",
      description: "ML model predicting heart disease with 95% accuracy using patient health metrics and lifestyle data. Deployed as a Streamlit web app.",
      overview: "This project aims to predict the likelihood of heart disease using machine learning algorithms to assist healthcare professionals in early diagnosis. The system analyzes patient health metrics and lifestyle factors to provide risk assessments, enabling proactive healthcare interventions.",
      problemStatement: "Traditional diagnosis methods for cardiovascular diseases are often time-consuming, expensive, and subjective, leading to delayed detection. Heart disease remains a leading cause of death globally, and there is a critical need for accessible, accurate, and early prediction systems that can identify at-risk patients before symptoms become severe.",
      objectives: [
        "Develop a highly accurate ML model for heart disease risk prediction",
        "Create an intuitive web interface accessible to healthcare professionals",
        "Implement comprehensive data preprocessing and feature engineering pipeline",
        "Achieve minimum 90% accuracy with low false negative rate",
        "Deploy the system as a scalable web application"
      ],
      literatureReview: "Existing systems primarily rely on traditional statistical methods or single-algorithm approaches. Recent studies have shown ensemble methods and deep learning can improve prediction accuracy. This project builds upon these findings by implementing a comparative analysis of multiple algorithms and selecting the best-performing model with optimal hyperparameters.",
      architecture: "The system follows a three-tier architecture: (1) Data Layer - handles data ingestion, validation, and storage; (2) Processing Layer - performs feature engineering, model training, and prediction; (3) Presentation Layer - Streamlit web interface for user interaction. Data flows from user input through preprocessing pipeline to trained model, with results visualized through interactive dashboards.",
      methodology: "Data Collection: Utilized the UCI Heart Disease dataset with 303 patient records and 14 attributes. Preprocessing: Handled missing values using median imputation, normalized numerical features using StandardScaler, and encoded categorical variables. Feature Engineering: Created interaction features and polynomial terms. Model Selection: Trained and compared Logistic Regression, Random Forest, SVM, and XGBoost. Evaluation: Used 5-fold cross-validation and tested on 20% holdout set. Deployment: Containerized using Docker and deployed on Streamlit Cloud.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Docker", "Git"],
      modules: [
        "User Authentication Module - Secure login for healthcare professionals",
        "Data Upload Module - CSV file upload and validation",
        "Preprocessing Module - Automated data cleaning and transformation",
        "Prediction Module - Real-time risk assessment using trained model",
        "Visualization Dashboard - Interactive charts showing feature importance and probability scores",
        "Report Generation - Downloadable PDF reports for patient records"
      ],
      results: "Achieved 95% accuracy, 93% recall, 94% precision, and 93.5% F1-score on test data. Random Forest emerged as the best-performing model. The system successfully processes predictions in under 2 seconds. ROC-AUC score of 0.97 demonstrates excellent discrimination capability. Feature importance analysis revealed age, chest pain type, and cholesterol as top predictors.",
      testing: "Conducted comprehensive unit testing using pytest for all data processing functions. Performed integration testing to ensure seamless module interactions. Validated model performance using cross-validation and bootstrap methods. User acceptance testing with 5 healthcare professionals confirmed usability and reliability.",
      challenges: [
        "Class Imbalance: Addressed using SMOTE oversampling technique",
        "Feature Selection: Resolved through recursive feature elimination and correlation analysis",
        "Model Interpretability: Implemented SHAP values for explainable predictions",
        "Deployment Issues: Fixed dependency conflicts using virtual environments and requirements.txt"
      ],
      futureScope: [
        "Integrate deep learning models (CNN, LSTM) for improved accuracy",
        "Add support for real-time ECG signal analysis",
        "Develop mobile application for iOS and Android",
        "Implement continuous learning pipeline for model updates",
        "Integrate with Electronic Health Record (EHR) systems"
      ],
      conclusion: "The AI-Based Heart Disease Prediction System successfully demonstrates the potential of machine learning in healthcare diagnostics. With 95% accuracy and user-friendly interface, it serves as an effective preliminary diagnostic tool that can assist healthcare professionals in identifying at-risk patients early, potentially saving lives through timely interventions.",
      references: [
        "UCI Machine Learning Repository - Heart Disease Dataset",
        "Breiman, L. (2001) - Random Forests, Machine Learning",
        "Chawla et al. (2002) - SMOTE: Synthetic Minority Over-sampling Technique",
        "WHO Global Health Statistics on Cardiovascular Diseases"
      ],
      tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      github: "https://github.com",
      demo: "https://demo.com",
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Real-time Object Detection System",
      description: "Computer vision system using YOLO for real-time object detection in video streams with 30+ FPS performance.",
      overview: "This project implements a high-performance real-time object detection system capable of identifying and tracking multiple objects in video streams. Designed for security and surveillance applications, it processes 1080p video at 35+ FPS while maintaining high detection accuracy across various environmental conditions.",
      problemStatement: "Traditional security systems rely on manual monitoring, which is inefficient and prone to human error. Modern surveillance requires automated, real-time object detection with high accuracy and low latency. The challenge was to process high-resolution video streams at 30+ FPS while maintaining detection accuracy across various lighting conditions, object scales, and occlusions.",
      objectives: [
        "Achieve real-time object detection at 30+ FPS on 1080p video",
        "Support detection of 80+ object classes with high accuracy",
        "Implement GPU acceleration for optimal performance",
        "Create a REST API for easy system integration",
        "Handle various lighting and weather conditions effectively"
      ],
      literatureReview: "YOLO (You Only Look Once) represents a breakthrough in real-time object detection. Unlike R-CNN variants that use region proposals, YOLO treats detection as a regression problem, enabling single-pass inference. YOLOv5 offers the best balance of speed and accuracy. This project leverages YOLOv5's architecture while implementing custom optimizations for surveillance scenarios.",
      architecture: "The system comprises: (1) Video Ingestion Layer - captures frames from IP cameras or video files; (2) Preprocessing Layer - resizes and normalizes frames; (3) Detection Layer - YOLOv5 model performs inference; (4) Post-processing Layer - applies NMS and tracking; (5) API Layer - Flask REST API serves results; (6) Visualization Layer - annotates frames with bounding boxes and labels.",
      methodology: "Model Selection: Chose YOLOv5m for optimal speed-accuracy tradeoff. Fine-tuning: Trained on COCO dataset supplemented with custom retail environment images. Optimization: Implemented TensorRT for inference acceleration, batch processing for multiple streams, and asynchronous frame processing. API Development: Built Flask REST API with endpoints for video upload, live stream processing, and result retrieval. Deployment: Containerized using Docker with CUDA support.",
      tools: ["Python", "PyTorch", "YOLOv5", "OpenCV", "Flask", "CUDA", "TensorRT", "Docker", "NumPy"],
      modules: [
        "Video Stream Handler - Manages multiple camera feeds and video files",
        "Frame Preprocessing - Resizing, normalization, and augmentation",
        "YOLO Inference Engine - GPU-accelerated object detection",
        "Object Tracking - Maintains object IDs across frames",
        "Alert System - Triggers notifications for specific detections",
        "REST API - Provides endpoints for integration",
        "Dashboard - Real-time visualization of detection results"
      ],
      results: "Achieved 35 FPS on 1080p video streams with 89% mAP@0.5. Successfully detects 80+ object classes including people, vehicles, and animals. Inference latency of 28ms per frame on NVIDIA RTX 3060. The system handles 4 simultaneous video streams without performance degradation. Successfully deployed in retail environment processing 1M+ frames daily.",
      testing: "Performance testing across various resolutions (720p, 1080p, 4K) and frame rates. Accuracy validation on COCO validation set and custom retail dataset. Stress testing with 8 concurrent video streams. Tested under different lighting conditions (daylight, night, low-light) and weather scenarios. Load testing of REST API with 100+ concurrent requests.",
      challenges: [
        "GPU Memory Constraints: Optimized batch size and implemented model quantization",
        "Real-time Performance: Achieved through TensorRT optimization and asynchronous processing",
        "Object Tracking: Implemented DeepSORT for robust multi-object tracking",
        "False Positives: Reduced through confidence threshold tuning and NMS optimization"
      ],
      futureScope: [
        "Implement YOLOv8 for improved accuracy",
        "Add action recognition for suspicious behavior detection",
        "Integrate with facial recognition system",
        "Support edge deployment on Jetson devices",
        "Implement anomaly detection using unsupervised learning"
      ],
      conclusion: "The Real-time Object Detection System successfully demonstrates the capability of deep learning in automated surveillance. With 35 FPS performance and 89% accuracy, it provides a robust solution for security applications, significantly reducing the need for manual monitoring while improving threat detection capabilities.",
      references: [
        "Redmon et al. (2016) - You Only Look Once: Unified, Real-Time Object Detection",
        "Ultralytics YOLOv5 Documentation",
        "Lin et al. (2014) - Microsoft COCO: Common Objects in Context",
        "Wojke et al. (2017) - Simple Online and Realtime Tracking with Deep Association Metric"
      ],
      tags: ["PyTorch", "OpenCV", "YOLO", "Flask"],
      github: "https://github.com",
      demo: null,
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Multi-lingual Sentiment Analysis API",
      description: "NLP-powered REST API for sentiment analysis with multi-language support, handling 1000+ requests per minute.",
      overview: "A scalable, production-ready REST API that performs sentiment analysis on text data across 10+ languages. Built for businesses to analyze customer feedback, social media posts, and reviews in real-time. The API leverages state-of-the-art transformer models and implements advanced caching and batching strategies for high-throughput performance.",
      problemStatement: "Businesses receive customer feedback through multiple channels (social media, reviews, emails) in various languages. Manual sentiment analysis is time-consuming and subjective. Existing solutions often support limited languages or lack the scalability required for real-time analysis. The challenge was to create a unified API that could handle diverse languages, process thousands of requests per minute, and maintain high accuracy.",
      objectives: [
        "Build a REST API supporting 10+ languages for sentiment analysis",
        "Achieve 1000+ requests per minute throughput with <200ms latency",
        "Maintain 90%+ accuracy across all supported languages",
        "Implement robust caching and request batching mechanisms",
        "Provide detailed sentiment scores and confidence metrics"
      ],
      literatureReview: "BERT (Bidirectional Encoder Representations from Transformers) revolutionized NLP by introducing bidirectional context understanding. Multilingual BERT (mBERT) extends this to 104 languages. Recent work on cross-lingual models like XLM-RoBERTa shows improved performance. This project fine-tunes mBERT on multilingual sentiment datasets and implements production-grade optimizations.",
      architecture: "Three-tier architecture: (1) API Gateway Layer - FastAPI handles HTTP requests, authentication, and rate limiting; (2) Processing Layer - Request batching, model inference, and caching logic; (3) Model Layer - Fine-tuned BERT model with ONNX runtime for optimized inference. Redis cache stores frequent queries. PostgreSQL logs requests for analytics. Docker containers enable horizontal scaling.",
      methodology: "Model Development: Fine-tuned multilingual BERT on aggregated sentiment datasets from Amazon reviews, Twitter, and IMDB in 10 languages. Training used 4 A100 GPUs for 72 hours. Optimization: Converted model to ONNX format for 3x inference speedup. API Development: Built with FastAPI for async request handling. Implemented request batching (max 32 requests) and Redis caching (TTL 1 hour). Deployment: Containerized with Docker, orchestrated with Kubernetes, deployed on AWS ECS with auto-scaling.",
      tools: ["Python", "TensorFlow", "PyTorch", "Transformers", "BERT", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes", "ONNX"],
      modules: [
        "Authentication Module - JWT-based API key authentication",
        "Request Validation - Pydantic schemas for input validation",
        "Preprocessing Module - Text cleaning and language detection",
        "Batching Engine - Groups requests for efficient processing",
        "Inference Module - ONNX-optimized BERT inference",
        "Caching Layer - Redis-based result caching",
        "Analytics Module - Tracks usage and performance metrics",
        "Rate Limiter - Token bucket algorithm for fair usage"
      ],
      results: "API successfully handles 1200+ requests per minute with average latency of 185ms. Achieved 91% average accuracy across 10 supported languages (English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Japanese, Chinese). Cache hit rate of 34% significantly reduces compute costs. 99.9% uptime over 6 months of production use. Processes 500K+ requests daily for 12 enterprise clients.",
      testing: "Unit testing with pytest covering 95% code coverage. Load testing using Locust simulating 2000 concurrent users. Accuracy validation on held-out test sets for each language. Stress testing to identify breaking points (max 1500 RPS before degradation). A/B testing of caching strategies. Security penetration testing for API vulnerabilities.",
      challenges: [
        "Language Detection: Implemented fasttext for accurate language identification",
        "Model Size: Reduced from 1.3GB to 420MB using model distillation",
        "Cold Start: Implemented model warm-up scripts reducing first-request latency",
        "Memory Leaks: Fixed using proper resource cleanup and garbage collection tuning"
      ],
      futureScope: [
        "Add support for aspect-based sentiment analysis",
        "Implement emotion detection (joy, anger, sadness, etc.)",
        "Expand to 20+ languages including Arabic and Hindi",
        "Add streaming API for real-time social media monitoring",
        "Integrate sarcasm and irony detection"
      ],
      conclusion: "The Multi-lingual Sentiment Analysis API successfully delivers enterprise-grade sentiment analysis capabilities across multiple languages. With high throughput, low latency, and robust accuracy, it empowers businesses to gain actionable insights from customer feedback at scale, improving customer satisfaction and business decision-making.",
      references: [
        "Devlin et al. (2018) - BERT: Pre-training of Deep Bidirectional Transformers",
        "Pires et al. (2019) - How multilingual is Multilingual BERT?",
        "HuggingFace Transformers Documentation",
        "FastAPI Documentation - High-Performance APIs"
      ],
      tags: ["TensorFlow", "BERT", "FastAPI", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Customer Churn Prediction System",
      description: "Ensemble ML model predicting customer churn with 92% accuracy, helping reduce churn rate by 15%.",
      overview: "An intelligent customer churn prediction system developed for a telecommunications company to identify at-risk customers before they leave. The system combines advanced machine learning techniques with business intelligence dashboards, enabling proactive retention strategies that have reduced churn rate by 15% and saved millions in revenue.",
      problemStatement: "The telecom company was experiencing 27% annual customer churn, significantly impacting revenue and growth. Customer acquisition costs are 5-7x higher than retention costs. Manual identification of at-risk customers was reactive and ineffective. The business needed an automated system to predict churn 30 days in advance with actionable insights, allowing implementation of targeted retention campaigns.",
      objectives: [
        "Build a predictive model with 90%+ accuracy for customer churn",
        "Identify key factors driving customer churn",
        "Predict churn 30 days in advance for intervention time",
        "Create interpretable model outputs for business stakeholders",
        "Integrate with CRM system for automated retention workflows"
      ],
      literatureReview: "Customer churn prediction has been extensively studied using logistic regression, decision trees, and neural networks. Recent research shows ensemble methods outperform single models. XGBoost and LightGBM demonstrate superior performance on tabular data. SHAP (SHapley Additive exPlanations) provides model interpretability crucial for business adoption. This project implements state-of-the-art ensemble techniques with explainable AI.",
      architecture: "End-to-end ML pipeline: (1) Data Layer - ETL from CRM, billing, and usage databases; (2) Feature Store - Stores engineered features with versioning; (3) Training Pipeline - Automated model training and hyperparameter tuning; (4) Prediction Service - REST API serving real-time predictions; (5) Analytics Layer - Power BI dashboards for business insights; (6) Action Layer - Integrates with CRM to trigger retention workflows.",
      methodology: "Data Collection: 18 months of data from 100K customers including demographics, usage patterns, billing, support tickets, and service interactions. Feature Engineering: Created 87 features including usage trends, payment patterns, support frequency, contract details, and competitor activity. Models Trained: XGBoost, LightGBM, Random Forest, and Logistic Regression. Ensemble: Stacking ensemble with meta-learner. Optimization: Bayesian optimization for hyperparameters. Evaluation: Stratified 5-fold cross-validation. Deployment: Airflow orchestrates daily predictions.",
      tools: ["Python", "XGBoost", "LightGBM", "Scikit-learn", "Pandas", "SQL", "Apache Airflow", "Power BI", "SHAP", "MLflow"],
      modules: [
        "ETL Pipeline - Extracts and transforms data from multiple sources",
        "Feature Engineering Engine - Generates time-series and aggregate features",
        "Model Training Module - Trains and validates ensemble models",
        "Prediction API - Serves real-time churn probability scores",
        "Explainability Module - Generates SHAP values for predictions",
        "Dashboard Module - Power BI visualizations for business teams",
        "Alert System - Notifies account managers of high-risk customers",
        "A/B Testing Framework - Measures retention campaign effectiveness"
      ],
      results: "Achieved 92% accuracy, 88% precision, 85% recall, and F1-score of 86.5%. Model identifies 94% of churners 30 days before actual churn. Top churn drivers: contract type, customer support interactions, data usage decline, and payment delays. Deployed to production identifying 2,500 at-risk customers monthly. Retention campaigns achieved 35% save rate, reducing overall churn by 15% and increasing annual revenue by $4.2M.",
      testing: "Backtesting on 6 months historical data showing 91% precision. Out-of-time validation on most recent 3 months data. A/B testing compared model-driven campaigns vs random outreach showing 2.8x improvement. Monitored model performance for drift using PSI (Population Stability Index). Validated SHAP explanations with business experts for reasonableness.",
      challenges: [
        "Data Quality: 23% missing values in key fields, addressed using multiple imputation",
        "Class Imbalance: 27% churn rate handled using SMOTE and class weights",
        "Concept Drift: Implemented monitoring and automated retraining pipeline",
        "Business Buy-in: Created intuitive visualizations and case studies demonstrating ROI"
      ],
      futureScope: [
        "Implement deep learning models (LSTM) for sequential pattern detection",
        "Add customer lifetime value (CLV) prediction",
        "Develop personalized retention offer recommendation system",
        "Integrate NLP for sentiment analysis of customer service calls",
        "Expand to predict partial churn (service downgrade)"
      ],
      conclusion: "The Customer Churn Prediction System successfully demonstrates the business value of machine learning in customer retention. By accurately predicting churn 30 days in advance and providing actionable insights, the system enabled targeted interventions that reduced churn by 15% and delivered significant ROI. The interpretable model outputs fostered trust and adoption among business stakeholders.",
      references: [
        "Vafeiadis et al. (2015) - Comparison of ML Techniques for Customer Churn Prediction",
        "Lundberg & Lee (2017) - A Unified Approach to Interpreting Model Predictions (SHAP)",
        "Chen & Guestrin (2016) - XGBoost: A Scalable Tree Boosting System",
        "Telecom Industry Churn Statistics - Gartner Research"
      ],
      tags: ["Python", "XGBoost", "SQL", "Power BI"],
      github: "https://github.com",
      demo: null,
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Neural Style Transfer Application",
      description: "Deep learning application that applies artistic styles to images using CNN-based neural style transfer.",
      overview: "An innovative web application that transforms ordinary photographs into artistic masterpieces by applying the style of famous paintings and artwork. Using deep convolutional neural networks, the app separates and recombines content and style representations, enabling users to create unique artistic images in seconds. Designed for artists, content creators, and enthusiasts to explore AI-powered creativity.",
      problemStatement: "Artists and content creators seek tools to apply artistic transformations to their photographs, but traditional editing software requires extensive manual work and artistic expertise. Existing neural style transfer implementations are either too slow for practical use or produce low-quality results. The challenge was to create an accessible, fast, and high-quality application that democratizes artistic image transformation.",
      objectives: [
        "Implement neural style transfer with processing time under 30 seconds",
        "Maintain high image quality at 1024x1024 resolution",
        "Provide intuitive user interface for non-technical users",
        "Support both preset artistic styles and custom style images",
        "Enable batch processing for multiple images"
      ],
      literatureReview: "Gatys et al. (2016) introduced neural style transfer using VGG19's feature representations to separate content and style. Subsequent improvements include fast style transfer using feed-forward networks (Johnson et al., 2016) and arbitrary style transfer (Huang & Belongie, 2017). This project implements the optimization-based approach with multi-scale processing and perceptual loss functions for superior quality.",
      architecture: "Web-based architecture: (1) Frontend Layer - Streamlit UI for image upload, style selection, and parameter adjustment; (2) Processing Layer - Image preprocessing, style transfer engine, and post-processing; (3) Model Layer - VGG19 feature extractor and L-BFGS optimizer; (4) Storage Layer - temporary file storage for uploaded images and generated outputs. GPU acceleration via CUDA when available, CPU fallback for wider accessibility.",
      methodology: "Model Architecture: Utilized pretrained VGG19 network for feature extraction. Content representation from conv4_2 layer, style representation from conv1_1, conv2_1, conv3_1, conv4_1, conv5_1 layers. Optimization: L-BFGS optimizer minimizes combined content and style loss. Multi-scale: Progressive refinement from low to high resolution. Implementation: TensorFlow 2.x with Keras API. Interface: Streamlit provides interactive controls for style weight, content weight, and number of iterations. Preset Styles: 10 famous artworks (Van Gogh, Picasso, Monet, etc.) preprocessed and optimized.",
      tools: ["Python", "TensorFlow", "Keras", "NumPy", "PIL", "OpenCV", "Streamlit", "Matplotlib"],
      modules: [
        "Image Upload Module - Handles multiple image formats with validation",
        "Style Gallery - Displays preset artistic styles with previews",
        "Preprocessing Module - Resizes and normalizes images",
        "Style Transfer Engine - Implements neural style transfer algorithm",
        "Parameter Control - Adjustable style/content weights and iterations",
        "Progress Tracker - Real-time visualization of optimization process",
        "Post-processing Module - Enhances colors and sharpness",
        "Gallery Module - Displays user's generated images"
      ],
      results: "Application processes 1024x1024 images in 25 seconds on GPU (NVIDIA RTX 3060), 180 seconds on CPU. Achieved high perceptual quality with SSIM score of 0.85 for content preservation. Successfully used by 500+ users generating 5,000+ stylized images. User satisfaction rating of 4.6/5. Preset styles cover various art movements: Impressionism, Cubism, Abstract, and Pop Art. Supports custom style images up to 2048x2048 resolution.",
      testing: "Quality assessment using LPIPS (Learned Perceptual Image Patch Similarity) metric. User study with 30 participants rating output quality. Performance testing across different image sizes and styles. Stress testing with concurrent users (max 10 simultaneous processes). Cross-platform testing on Windows, macOS, and Linux. Browser compatibility testing for web interface.",
      challenges: [
        "Processing Speed: Optimized using multi-scale approach and GPU acceleration",
        "Memory Management: Implemented automatic resolution downscaling for large images",
        "Color Consistency: Added color preservation option using luminance transfer",
        "Style Selection: Curated preset styles based on user feedback and popularity"
      ],
      futureScope: [
        "Implement fast style transfer using feed-forward networks",
        "Add video style transfer for short clips",
        "Integrate with social media for direct sharing",
        "Develop mobile app versions for iOS and Android",
        "Add style mixing feature to combine multiple art styles",
        "Implement style intensity slider for partial transformations"
      ],
      conclusion: "The Neural Style Transfer Application successfully bridges the gap between AI technology and artistic creativity. By making sophisticated deep learning techniques accessible through an intuitive interface, it empowers users to create unique artistic images without requiring technical expertise. The application demonstrates the potential of AI as a creative tool, enhancing rather than replacing human creativity.",
      references: [
        "Gatys et al. (2016) - A Neural Algorithm of Artistic Style",
        "Johnson et al. (2016) - Perceptual Losses for Real-Time Style Transfer",
        "Simonyan & Zisserman (2014) - Very Deep Convolutional Networks (VGG)",
        "Huang & Belongie (2017) - Arbitrary Style Transfer in Real-time"
      ],
      tags: ["TensorFlow", "Keras", "Streamlit", "PIL"],
      github: "https://github.com",
      demo: "https://demo.com",
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Hybrid Recommendation System",
      description: "Collaborative filtering recommendation engine serving personalized content to 50k+ users daily.",
      overview: "A sophisticated recommendation system developed for an e-learning platform to deliver personalized course suggestions to users based on their learning history, preferences, and behavior patterns. The hybrid approach combines collaborative filtering, content-based filtering, and deep learning to handle diverse scenarios including cold start problems. The system processes millions of interactions daily, driving significant improvements in user engagement and course completion.",
      problemStatement: "The e-learning platform with 200,000+ users and 5,000+ courses struggled with content discovery. Only 15% of courses received significant enrollments, while users spent excessive time searching for relevant content. New users faced blank recommendation pages (cold start problem). Manual curation was unscalable. The challenge was to build a scalable, real-time recommendation system that handles cold start, provides diverse recommendations, and continuously learns from user behavior.",
      objectives: [
        "Build hybrid recommendation system combining multiple algorithms",
        "Achieve sub-100ms recommendation latency for 50K+ daily users",
        "Solve cold start problem for new users and courses",
        "Increase course discovery and enrollment rates",
        "Implement online learning for continuous improvement"
      ],
      literatureReview: "Collaborative filtering (CF) predicts user preferences based on similar users' behaviors. Content-based filtering uses item features. Matrix factorization (SVD) and neighborhood methods are classical CF approaches. Deep learning models like Neural Collaborative Filtering and autoencoders show improved performance. Hybrid systems combining multiple approaches demonstrate superior results. This project implements a hybrid architecture leveraging multiple algorithms with ensemble weighting.",
      architecture: "Microservices architecture: (1) Data Collection Service - Tracks user interactions (views, enrollments, ratings, completions); (2) Feature Engineering Service - Generates user and course embeddings; (3) Model Service - Houses multiple recommendation algorithms; (4) Ensemble Service - Combines predictions with learned weights; (5) Serving Layer - FastAPI endpoints with Redis caching; (6) Feedback Loop - Continuously updates models with new interactions; (7) A/B Testing Framework - Evaluates algorithm improvements.",
      methodology: "Data: 2 years of interaction data from 200K users and 5K courses. User features: demographics, learning history, preferences. Course features: category, difficulty, instructor, ratings, content embeddings. Algorithms Implemented: (1) Collaborative Filtering - SVD++ and user-based KNN using Surprise library; (2) Content-Based - TF-IDF and word2vec on course descriptions; (3) Deep Learning - Neural Collaborative Filtering with user/item embeddings; (4) Popularity-Based - For cold start. Ensemble: Stacking with XGBoost meta-learner. Evaluation: Hit Rate@10, NDCG@10, diversity metrics.",
      tools: ["Python", "PyTorch", "Surprise", "Scikit-learn", "FastAPI", "Redis", "MongoDB", "Celery", "Apache Kafka", "MLflow"],
      modules: [
        "User Profiling Engine - Builds comprehensive user interest profiles",
        "Course Embedding Generator - Creates vector representations of courses",
        "Collaborative Filtering Module - User-based and item-based CF",
        "Content-Based Module - Analyzes course content similarity",
        "Deep Learning Module - Neural collaborative filtering",
        "Hybrid Ensemble - Intelligently combines algorithm outputs",
        "Cold Start Handler - Strategies for new users/courses",
        "Real-time Serving API - FastAPI with caching layer",
        "Feedback Loop - Online learning from user interactions",
        "Diversity Controller - Ensures recommendation variety"
      ],
      results: "System serves 50,000+ daily active users with 95th percentile latency of 85ms. Achieved Hit Rate@10 of 0.42 and NDCG@10 of 0.38 on offline evaluation. Increased course discovery by 65%, enrollment rate by 40%, and completion rate by 25%. Cold start accuracy improved to 78% using popularity and content features. Cache hit rate of 68% reduces compute costs. A/B testing shows 28% improvement over baseline popularity recommendations. System processes 5M+ interactions daily.",
      testing: "Offline evaluation using train-test split with temporal ordering. A/B testing with 10K users comparing hybrid vs single-algorithm approaches. User survey (N=200) on recommendation relevance. Performance load testing simulating 100K concurrent users. Cold start testing with new user/course scenarios. Diversity metrics ensuring recommendation variety. Implemented bandit-based online evaluation for continuous learning.",
      challenges: [
        "Cold Start: Solved using content features, popularity, and demographic clustering",
        "Scalability: Implemented Redis caching and asynchronous processing with Celery",
        "Data Sparsity: Applied matrix factorization and implicit feedback signals",
        "Filter Bubble: Added diversity and serendipity metrics to recommendation scoring",
        "Real-time Updates: Implemented incremental model updates using online learning"
      ],
      futureScope: [
        "Integrate graph neural networks for social recommendation",
        "Add sequence modeling (RNN/Transformer) for session-based recommendations",
        "Implement multi-armed bandit for exploration-exploitation balance",
        "Add explainable recommendations showing why courses are suggested",
        "Develop cross-platform recommendations (mobile, web, email)",
        "Integrate learning path recommendations for skill development"
      ],
      conclusion: "The Hybrid Recommendation System successfully transformed course discovery on the e-learning platform. By intelligently combining multiple algorithms and addressing cold start challenges, it delivers highly relevant personalized recommendations at scale. The significant improvements in engagement and completion rates demonstrate the business value of sophisticated recommendation systems in education technology.",
      references: [
        "Koren (2008) - Factorization Meets the Neighborhood: a Multifaceted Collaborative Filtering Model",
        "He et al. (2017) - Neural Collaborative Filtering",
        "Burke (2002) - Hybrid Recommender Systems: Survey and Experiments",
        "Adomavicius & Tuzhilin (2005) - Toward the Next Generation of Recommender Systems"
      ],
      tags: ["Python", "Surprise", "Redis", "MongoDB"],
      github: "https://github.com",
      demo: null,
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world ML solutions solving complex problems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 card-shadow bg-card/50 backdrop-blur hover:scale-105 transition-all flex flex-col animate-fade-in-up cursor-pointer" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1" 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto project-details-scroll">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-gradient pr-8">
                    {projects[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-8 mt-6">
                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient rounded"></span>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tools?.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="px-3 py-1">
                          {tool}
                        </Badge>
                      )) || projects[selectedProject].tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Overview */}
                  {projects[selectedProject].overview && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].overview}
                      </p>
                    </div>
                  )}

                  {/* Problem Statement */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient rounded"></span>
                      Problem Statement
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].problemStatement}
                    </p>
                  </div>

                  {/* Objectives */}
                  {projects[selectedProject].objectives && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Objectives
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {projects[selectedProject].objectives.map((obj, idx) => (
                          <li key={idx} className="leading-relaxed">{obj}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Literature Review */}
                  {projects[selectedProject].literatureReview && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Literature Review
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].literatureReview}
                      </p>
                    </div>
                  )}

                  {/* System Architecture */}
                  {projects[selectedProject].architecture && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        System Architecture
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].architecture}
                      </p>
                    </div>
                  )}

                  {/* Methodology */}
                  {projects[selectedProject].methodology && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Methodology
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].methodology}
                      </p>
                    </div>
                  )}

                  {/* Implementation Modules */}
                  {projects[selectedProject].modules && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Implementation Modules
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {projects[selectedProject].modules.map((module, idx) => (
                          <li key={idx} className="leading-relaxed">{module}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient rounded"></span>
                      Results & Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].results}
                    </p>
                  </div>

                  {/* Testing */}
                  {projects[selectedProject].testing && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Testing & Validation
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].testing}
                      </p>
                    </div>
                  )}

                  {/* Challenges */}
                  {projects[selectedProject].challenges && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Challenges Faced
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {projects[selectedProject].challenges.map((challenge, idx) => (
                          <li key={idx} className="leading-relaxed">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Future Scope */}
                  {projects[selectedProject].futureScope && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Future Scope
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {projects[selectedProject].futureScope.map((scope, idx) => (
                          <li key={idx} className="leading-relaxed">{scope}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Snapshots */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient rounded"></span>
                      Project Snapshots
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projects[selectedProject].snapshots?.map((snapshot, idx) => (
                        <img 
                          key={idx}
                          src={snapshot} 
                          alt={`${projects[selectedProject].title} snapshot ${idx + 1}`}
                          className="w-full rounded-lg border border-border hover:scale-105 transition-transform"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Conclusion */}
                  {projects[selectedProject].conclusion && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        Conclusion
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].conclusion}
                      </p>
                    </div>
                  )}

                  {/* References */}
                  {projects[selectedProject].references && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient rounded"></span>
                        References
                      </h3>
                      <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                        {projects[selectedProject].references.map((ref, idx) => (
                          <li key={idx} className="leading-relaxed">{ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border sticky bottom-0 bg-background/95 backdrop-blur pb-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {projects[selectedProject].demo && (
                      <Button className="flex-1" asChild>
                        <a href={projects[selectedProject].demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
