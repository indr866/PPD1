

// API Configuration (Optional - for future AI enhancement)
const COHERE_API_KEY = '2jw8UMx6URblHXsz4HTJuoO81Zypd0LZocxBB3my';
const COHERE_API_URL = 'https://api.cohere.ai/v1/generate';

// COMPLETE STATE-DISTRICT DATABASE
const stateDistricts = {
    // ... (tumhara original state-district object yahi rahega) ...
    "punjab": ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Malerkotla","Mansa","Mohali (SAS Nagar)","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shahid Bhagat Singh Nagar","Tarn Taran"],
    
    "haryana": ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],

    "uttar_pradesh": ["Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddh Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],

    "madhya_pradesh": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],

    "maharashtra": ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nanded","Nandurbar","Nagpur","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],

    "rajasthan": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"],

    "gujarat": ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],

    "bihar": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],

    "west_bengal": ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],

    "odisha": ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"],

    "karnataka": ["Bagalkot","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban","Bidar","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Vijayapura","Yadgir"],

    "tamil_nadu": ["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tirupattur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],

    "andhra_pradesh": ["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"],

    "telangana": ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal-Malkajgiri","Mulugu","Nagarkurnool","Nalgonda","Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal","Yadadri Bhuvanagiri"],

    "kerala": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],

    "jharkhand": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"],

    "chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],

    "assam": ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup Rural","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara","Tinsukia","Udalguri","West Karbi Anglong"],

    "himachal_pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],

    "uttarakhand": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],

    "goa": ["North Goa","South Goa"],

    "meghalaya": ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri-Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],

    "manipur": ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],

    "mizoram": ["Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Saitual","Serchhip"],

    "nagaland": ["Chumukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland","Noklak","Peren","Phek","Tuensang","Tseminyu","Wokha","Zunheboto"],

    "tripura": ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],

    "sikkim": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],

    "arunachal_pradesh": ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Itanagar Capital Region","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke-Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang"]
    
    // ... (baaki states yahi rahenge) ...
};

// EXTENSIVE SOIL TYPE BASED CROP DATABASE WITH INDUSTRY CONNECTIONS
const soilCropDatabase = {
    "soil_types": {
        "alluvial": {
            "name": "Alluvial Soil (कछारी मिट्टी)",
            "characteristics": "Fine texture, rich in potash & lime, poor in phosphorus. Found in river basins & plains.",
            "water_retention": "Good",
            "fertility": "High to Very High",
            "pH_range": "6.5-8.4",
            "color": "Light grey to ash grey"
        },
        "black": {
            "name": "Black Soil (काली मिट्टी / रेगड़ मिट्टी)",
            "characteristics": "Clayey, rich in iron, lime, calcium, magnesium. Swells when wet, cracks when dry.",
            "water_retention": "Very good",
            "fertility": "High",
            "pH_range": "7.5-8.5",
            "color": "Deep black to light black"
        },
        "red_yellow": {
            "name": "Red & Yellow Soil (लाल व पीली मिट्टी)",
            "characteristics": "Sandy loam, rich in iron oxides, poor in nitrogen, phosphorus, humus. Slightly acidic.",
            "water_retention": "Poor to Medium",
            "fertility": "Low to Medium",
            "pH_range": "5.5-7.5",
            "color": "Red to yellow"
        },
        "laterite": {
            "name": "Laterite Soil (लेटराइट मिट्टी)",
            "characteristics": "Acidic, rich in iron & aluminum oxides, poor in nitrogen, potash, lime.",
            "water_retention": "Poor",
            "fertility": "Low",
            "pH_range": "4.5-6.0",
            "color": "Reddish brown"
        },
        "mountain": {
            "name": "Mountain Soil (पर्वतीय मिट्टी)",
            "characteristics": "Immature soil with low humus, acidic, rich in organic matter at top layer.",
            "water_retention": "Variable",
            "fertility": "Low to Medium",
            "pH_range": "4.0-6.5",
            "color": "Dark brown to black"
        },
        "desert": {
            "name": "Desert Soil (मरुस्थलीय मिट्टी)",
            "characteristics": "Sandy, poor in organic matter, high salt content, alkaline.",
            "water_retention": "Very poor",
            "fertility": "Very low",
            "pH_range": "7.5-8.5",
            "color": "Red to brown"
        },
        "sandy_loam": {
            "name": "Sandy Loam Soil (बलुई दोमट मिट्टी)",
            "characteristics": "Mix of sand, silt & clay. Good drainage, easy to work with.",
            "water_retention": "Medium",
            "fertility": "Medium",
            "pH_range": "6.0-7.5",
            "color": "Light brown"
        }
    },
    
    // CROPS WITH INDUSTRY CONNECTIONS
    "soil_based_crops": {
        "alluvial": {
            "kharif": ["Rice (Basmati, Sona Masuri)", "Sugarcane", "Jute", "Maize (Baby corn)", "Cotton (American)"],
            "rabi": ["Wheat (Sharbati, Lokwan)", "Barley", "Gram (Chana)", "Mustard", "Linseed", "Potato"],
            "zaid": ["Watermelon", "Muskmelon", "Cucumber", "Bitter gourd", "Okra"],
            "best_for": "Rice-Wheat rotation, Sugarcane, High-value vegetables",
            "industry_connections": [
                "Rice mills & exporters",
                "Sugar factories",
                "Flour mills",
                "Potato chips factories",
                "Vegetable processing units"
            ],
            "market_value": "High (₹25,000-50,000/acre profit)",
            "fertilizer_requirement": "N: High, P: Medium, K: Low",
            "improvement_methods": ["Green manuring with Dhaincha", "Add organic matter", "Proper drainage management"]
        },
        "black": {
            "kharif": ["Cotton (BT Cotton)", "Soybean", "Groundnut", "Maize", "Tur (Pigeon pea)"],
            "rabi": ["Wheat", "Gram", "Sunflower", "Safflower", "Sorghum"],
            "zaid": ["Vegetables", "Pulses", "Onion"],
            "best_for": "Cotton (known as Black Cotton Soil), Soybean, Oilseeds",
            "industry_connections": [
                "Cotton ginning mills",
                "Soybean processing plants",
                "Oil mills",
                "Textile industry",
                "Animal feed units"
            ],
            "market_value": "Medium-High (₹20,000-40,000/acre profit)",
            "fertilizer_requirement": "N: Medium, P: Low, K: High",
            "improvement_methods": ["Add gypsum for drainage", "Deep summer ploughing", "Add FYM/compost"]
        },
        "red_yellow": {
            "kharif": ["Groundnut (Virginia)", "Ragi (Finger millet)", "Maize", "Millets (Jowar, Bajra)", "Pulses (Moong, Urad)"],
            "rabi": ["Wheat", "Gram", "Mustard", "Potato", "Sunflower"],
            "zaid": ["Vegetables", "Pulses", "Sesame"],
            "best_for": "Groundnut, Millets, Pulses, Horticulture",
            "industry_connections": [
                "Groundnut oil mills",
                "Millet processing units",
                "Dal mills",
                "Potato chips factories",
                "Horticulture exporters"
            ],
            "market_value": "Medium (₹15,000-35,000/acre profit)",
            "fertilizer_requirement": "N: High, P: High, K: Medium",
            "improvement_methods": ["Add lime for acidity", "Add organic matter", "Terrace farming", "Mulching"]
        },
        "laterite": {
            "kharif": ["Cashew", "Tapioca", "Coffee (Arabica)", "Tea", "Rubber"],
            "rabi": ["Ragi", "Groundnut", "Potato", "Pineapple"],
            "zaid": ["Vegetables", "Ginger", "Turmeric"],
            "best_for": "Plantation crops, Spices, Horticulture",
            "industry_connections": [
                "Cashew processing units",
                "Tea processing plants",
                "Coffee roasters",
                "Spice processing",
                "Rubber factories"
            ],
            "market_value": "High (₹30,000-60,000/acre profit for plantations)",
            "fertilizer_requirement": "N: High, P: High, K: Low",
            "improvement_methods": ["Add organic matter", "Add lime", "Contour bunding", "Cover crops"]
        },
        "mountain": {
            "kharif": ["Tea (Darjeeling)", "Coffee (Robusta)", "Apples", "Potato", "Spices (Cardamom)"],
            "rabi": ["Vegetables (Cabbage, Cauliflower)", "Temperate fruits", "Peas", "Beans"],
            "zaid": ["Vegetables", "Medicinal plants"],
            "best_for": "Horticulture, Floriculture, Medicinal plants",
            "industry_connections": [
                "Tea gardens",
                "Fruit processing units",
                "Floriculture exporters",
                "Spice companies",
                "Medicinal plant extractors"
            ],
            "market_value": "Very High (₹40,000-80,000/acre profit)",
            "fertilizer_requirement": "N: Medium, P: Medium, K: Medium",
            "improvement_methods": ["Terrace farming", "Add organic compost", "Contour ploughing", "Mulching"]
        },
        "desert": {
            "kharif": ["Bajra (Pearl millet)", "Guar", "Moth bean", "Cluster bean", "Dates"],
            "rabi": ["Wheat (Durum)", "Gram", "Mustard", "Barley", "Cumin"],
            "zaid": ["Watermelon", "Cucumber", "Muskmelon"],
            "best_for": "Drought-resistant crops, Spices, Medicinal plants",
            "industry_connections": [
                "Guar gum industries",
                "Millet processing",
                "Spice exporters",
                "Date processing units",
                "Medicinal plant industry"
            ],
            "market_value": "Low-Medium (₹10,000-25,000/acre profit)",
            "fertilizer_requirement": "N: Low, P: Medium, K: Medium",
            "improvement_methods": ["Drip irrigation", "Mulching with crop residue", "Wind breaks", "Gypsum application"]
        },
        "sandy_loam": {
            "kharif": ["Maize", "Pulses", "Vegetables", "Oilseeds", "Fodder crops"],
            "rabi": ["Wheat", "Mustard", "Vegetables", "Potato"],
            "zaid": ["Vegetables", "Cucurbits", "Fodder"],
            "best_for": "Vegetables, Fruits, Flowers",
            "industry_connections": [
                "Vegetable processing",
                "Seed companies",
                "Floriculture",
                "Food processing",
                "Exports"
            ],
            "market_value": "High (₹30,000-60,000/acre for vegetables)",
            "fertilizer_requirement": "N: Medium, P: Medium, K: Medium",
            "improvement_methods": ["Add organic matter", "Mulching", "Drip irrigation", "Crop rotation"]
        }
    },
    
    // STATE-WISE SOIL DISTRIBUTION WITH ACCURATE DISTRICT DATA
    "state_soil_mapping": {
        "punjab": {
            "primary_soil": "alluvial",
            "soil_distribution": {
                "alluvial": "90%",
                "sandy_loam": "8%", 
                "other": "2%"
            },
            "districts_soil": {
                "Amritsar": {"type": "alluvial", "quality": "Very fertile", "special_note": "Basmati rice zone - Export quality"},
                "Ludhiana": {"type": "alluvial", "quality": "Highly fertile", "special_note": "Wheat-rice area - Food bowl"},
                "Bathinda": {"type": "sandy_loam", "quality": "Medium fertility", "special_note": "Cotton belt - Textile industry"},
                "Patiala": {"type": "alluvial", "quality": "Fertile", "special_note": "Kinnow orchards - Fruit processing"},
                "Fazilka": {"type": "sandy_loam", "quality": "Low fertility", "special_note": "Dry area, needs micro-irrigation"}
            }
        },
        
        "haryana": {
            "primary_soil": "alluvial",
            "soil_distribution": {
                "alluvial": "60%",
                "sandy_loam": "35%",
                "desert": "5%"
            },
            "districts_soil": {
                "Gurugram": {"type": "sandy_loam", "quality": "Medium", "special_note": "Urban farming, vegetables for Delhi market"},
                "Hisar": {"type": "sandy_loam", "quality": "Low", "special_note": "Drought-prone, bajra, cotton area"},
                "Karnal": {"type": "alluvial", "quality": "High", "special_note": "Basmati rice area - Export hub"},
                "Rohtak": {"type": "alluvial", "quality": "Medium", "special_note": "Wheat-mustard area - Oil mills"},
                "Sirsa": {"type": "desert", "quality": "Low", "special_note": "Cotton, guar gum industry"}
            }
        },
        
        "bihar": {
            "primary_soil": "alluvial",
            "soil_distribution": {
                "alluvial": "92%",
                "red_yellow": "5%",
                "laterite": "3%"
            },
            "districts_soil": {
                // North Bihar - Pure Alluvial
                "Patna": {"type": "alluvial", "quality": "Very high", "special_note": "Rice-Wheat-Sugarcane belt - Food processing"},
                "Muzaffarpur": {"type": "alluvial", "quality": "Very high", "special_note": "Litchi capital - Fruit processing units"},
                "Gaya": {"type": "alluvial", "quality": "High", "special_note": "Pulses, oilseeds, mangoes - Dal mills"},
                "Bhagalpur": {"type": "alluvial", "quality": "High", "special_note": "Makhana, litchi, silk - Export potential"},
                "Purnia": {"type": "alluvial", "quality": "Medium", "special_note": "Jute, maize, makhana - Jute mills"},
                
                // South Bihar - Mixed Soils
                "Jamui": {
                    "type": "red_yellow", 
                    "quality": "Medium",
                    "special_note": "Red & Yellow soil. Paddy, maize, pulses. Stone mining area."
                },
                "Nawada": {"type": "red_yellow", "quality": "Medium", "special_note": "Mixed red & alluvial. Pulses major area."},
                "Aurangabad": {"type": "red_yellow", "quality": "Medium", "special_note": "Pulses, oilseeds. Sugar mills."},
                "Rohtas": {"type": "red_yellow", "quality": "Medium", "special_note": "Sugarcane, wheat. Cement industry."},
                "Kaimur": {"type": "red_yellow", "quality": "Low", "special_note": "Hilly area. Less fertile. Forest produce."}
            }
        },
        
        "uttar_pradesh": {
            "primary_soil": "alluvial",
            "soil_distribution": {
                "alluvial": "85%",
                "sandy_loam": "10%",
                "other": "5%"
            },
            "districts_soil": {
                "Lucknow": {"type": "alluvial", "quality": "Very high", "special_note": "Mango orchards - Fruit processing"},
                "Meerut": {"type": "alluvial", "quality": "High", "special_note": "Sugarcane area - Sugar mills cluster"},
                "Varanasi": {"type": "alluvial", "quality": "High", "special_note": "Rice-pulses area - Food processing"},
                "Bareilly": {"type": "alluvial", "quality": "Medium", "special_note": "Wheat-sugarcane - Dairy industry"},
                "Saharanpur": {"type": "alluvial", "quality": "High", "special_note": "Sugarcane belt - Paper industry"}
            }
        },
        
        "madhya_pradesh": {
            "primary_soil": "black",
            "soil_distribution": {
                "black": "65%",
                "red_yellow": "25%",
                "alluvial": "10%"
            },
            "districts_soil": {
                "Bhopal": {"type": "black", "quality": "Medium", "special_note": "Soybean-wheat area - Food processing"},
                "Indore": {"type": "black", "quality": "High", "special_note": "Soybean capital - Oil extraction plants"},
                "Jabalpur": {"type": "black", "quality": "Medium", "special_note": "Pulses, oilseeds - Dal mills"},
                "Gwalior": {"type": "red_yellow", "quality": "Low", "special_note": "Mustard, wheat - Oil mills"},
                "Ujjain": {"type": "black", "quality": "Medium", "special_note": "Soybean, cotton - Textile units"}
            }
        },
        
        "rajasthan": {
            "primary_soil": "desert",
            "soil_distribution": {
                "desert": "60%",
                "red_yellow": "25%",
                "alluvial": "15%"
            },
            "districts_soil": {
                "Jaipur": {"type": "red_yellow", "quality": "Low", "special_note": "Millets, pulses - Drought resistant crops"},
                "Jodhpur": {"type": "desert", "quality": "Very low", "special_note": "Guar, moth bean - Guar gum industry"},
                "Udaipur": {"type": "red_yellow", "quality": "Medium", "special_note": "Maize, pulses - Tribal farming"},
                "Bikaner": {"type": "desert", "quality": "Very low", "special_note": "Guar, moth bean - Spices"},
                "Alwar": {"type": "red_yellow", "quality": "Medium", "special_note": "Mustard, wheat - Dairy farming"}
            }
        },
        
        "maharashtra": {
            "primary_soil": "black",
            "soil_distribution": {
                "black": "55%",
                "red_yellow": "30%",
                "laterite": "15%"
            },
            "districts_soil": {
                "Mumbai Suburban": {"type": "coastal alluvial", "quality": "Medium", "special_note": "Urban farming, floriculture"},
                "Pune": {"type": "black", "quality": "High", "special_note": "Grapes, sugarcane - Wine industry"},
                "Nagpur": {"type": "black", "quality": "High", "special_note": "Orange orchards - Fruit processing"},
                "Nashik": {"type": "black", "quality": "Medium", "special_note": "Grapes, onion - Export oriented"},
                "Aurangabad": {"type": "black", "quality": "Low", "special_note": "Cotton, soybean - Drought-prone"}
            }
        },
        
        "west_bengal": {
            "primary_soil": "alluvial",
            "soil_distribution": {
                "alluvial": "80%",
                "laterite": "15%",
                "red_yellow": "5%"
            },
            "districts_soil": {
                "Kolkata": {"type": "alluvial", "quality": "High", "special_note": "Vegetables, flowers - Urban market"},
                "Bardhaman": {"type": "alluvial", "quality": "Very high", "special_note": "Rice, jute - Rice mills, jute mills"},
                "Murshidabad": {"type": "alluvial", "quality": "High", "special_note": "Mango, silk - Silk industry"},
                "Darjeeling": {"type": "mountain", "quality": "Medium", "special_note": "Tea, cardamom - Tea gardens"},
                "Bankura": {"type": "red_yellow", "quality": "Low", "special_note": "Millets, oilseeds - Tribal farming"}
            }
        },
        
        "karnataka": {
            "primary_soil": "red_yellow",
            "soil_distribution": {
                "red_yellow": "60%",
                "black": "25%",
                "laterite": "15%"
            },
            "districts_soil": {
                "Bengaluru Urban": {"type": "red_yellow", "quality": "Medium", "special_note": "Urban farming, floriculture - Export"},
                "Mysuru": {"type": "red_yellow", "quality": "Medium", "special_note": "Ragi, coconut - Organic farming"},
                "Belagavi": {"type": "black", "quality": "High", "special_note": "Sugarcane, maize - Sugar factories"},
                "Dakshina Kannada": {"type": "laterite", "quality": "Low", "special_note": "Coconut, arceanut - Plantation crops"},
                "Kalaburagi": {"type": "black", "quality": "Medium", "special_note": "Red gram, sunflower - Oil mills"}
            }
        },
        
        "tamil_nadu": {
            "primary_soil": "red_yellow",
            "soil_distribution": {
                "red_yellow": "65%",
                "black": "20%",
                "alluvial": "15%"
            },
            "districts_soil": {
                "Chennai": {"type": "coastal alluvial", "quality": "Medium", "special_note": "Urban farming, vegetables"},
                "Coimbatore": {"type": "black", "quality": "High", "special_note": "Cotton, turmeric - Textile industry"},
                "Madurai": {"type": "red_yellow", "quality": "Medium", "special_note": "Rice, banana - Food processing"},
                "Tiruchirappalli": {"type": "alluvial", "quality": "High", "special_note": "Coconut, rice - Oil mills"},
                "Nilgiris": {"type": "mountain", "quality": "Medium", "special_note": "Tea, vegetables - Tea estates"}
            }
        },
        
        "gujarat": {
            "primary_soil": "black",
            "soil_distribution": {
                "black": "50%",
                "alluvial": "30%",
                "desert": "20%"
            },
            "districts_soil": {
                "Ahmedabad": {"type": "alluvial", "quality": "Medium", "special_note": "Cotton, tobacco - Textile hub"},
                "Surat": {"type": "alluvial", "quality": "High", "special_note": "Rice, sugarcane - Diamond industry area"},
                "Rajkot": {"type": "black", "quality": "Medium", "special_note": "Groundnut, cotton - Oil mills"},
                "Vadodara": {"type": "black", "quality": "High", "special_note": "Sugarcane, cotton - Petrochemical area"},
                "Kutch": {"type": "desert", "quality": "Low", "special_note": "Dates, bajra - Saline soil management"}
            }
        },
        
        "andhra_pradesh": {
            "primary_soil": "red_yellow",
            "soil_distribution": {
                "red_yellow": "70%",
                "black": "20%",
                "alluvial": "10%"
            },
            "districts_soil": {
                "Visakhapatnam": {"type": "red_yellow", "quality": "Medium", "special_note": "Pulses, oilseeds - Port city"},
                "Guntur": {"type": "black", "quality": "High", "special_note": "Chilli, cotton - Chilli export hub"},
                "Krishna": {"type": "alluvial", "quality": "High", "special_note": "Rice, sugarcane - Krishna delta"},
                "Kurnool": {"type": "red_yellow", "quality": "Low", "special_note": "Groundnut, sunflower - Oil mills"},
                "Anantapur": {"type": "red_yellow", "quality": "Low", "special_note": "Groundnut, grapes - Drought area"}
            }
        },
        
        "telangana": {
            "primary_soil": "red_yellow",
            "soil_distribution": {
                "red_yellow": "75%",
                "black": "20%",
                "other": "5%"
            },
            "districts_soil": {
                "Hyderabad": {"type": "red_yellow", "quality": "Medium", "special_note": "Urban farming, flowers"},
                "Warangal": {"type": "black", "quality": "Medium", "special_note": "Cotton, pulses - Textile parks"},
                "Nizamabad": {"type": "black", "quality": "High", "special_note": "Turmeric, rice - Turmeric market"},
                "Karimnagar": {"type": "black", "quality": "Medium", "special_note": "Paddy, maize - Rice mills"},
                "Khammam": {"type": "red_yellow", "quality": "Low", "special_note": "Pulses, oilseeds - Tribal area"}
            }
        },
        
        "odisha": {
            "primary_soil": "red_yellow",
            "soil_distribution": {
                "red_yellow": "65%",
                "laterite": "25%",
                "alluvial": "10%"
            },
            "districts_soil": {
                "Bhubaneswar": {"type": "red_yellow", "quality": "Medium", "special_note": "Vegetables, flowers - Capital city"},
                "Cuttack": {"type": "alluvial", "quality": "High", "special_note": "Rice, pulses - Mahanadi delta"},
                "Balasore": {"type": "alluvial", "quality": "Medium", "special_note": "Rice, pulses - Coastal area"},
                "Koraput": {"type": "laterite", "quality": "Low", "special_note": "Ragi, millets - Tribal farming"},
                "Sambalpur": {"type": "red_yellow", "quality": "Medium", "special_note": "Rice, pulses - Hirakud dam area"}
            }
        },
        
        "jharkhand": {
            "primary_soil": "red_yellow",
            "soil_distribution": {
                "red_yellow": "85%",
                "laterite": "10%",
                "other": "5%"
            },
            "districts_soil": {
                "Ranchi": {"type": "red_yellow", "quality": "Medium", "special_note": "Vegetables, fruits - Capital area"},
                "Dhanbad": {"type": "red_yellow", "quality": "Low", "special_note": "Coal mining area - Limited farming"},
                "Bokaro": {"type": "red_yellow", "quality": "Medium", "special_note": "Steel plant area - Peri-urban farming"},
                "Jamshedpur": {"type": "red_yellow", "quality": "Medium", "special_note": "Vegetables - Industrial city supply"},
                "Hazaribagh": {"type": "red_yellow", "quality": "Medium", "special_note": "Rice, pulses - Plateau area"}
            }
        }
    },
    
    // SCALING AND INDUSTRY OPPORTUNITIES
    "scaling_opportunities": {
        "small_scale": {
            "investment": "₹50,000 - ₹2,00,000",
            "activities": ["Direct farm marketing", "Value addition at home", "Farmer's market", "Organic certification"],
            "profit_margin": "20-40%"
        },
        "medium_scale": {
            "investment": "₹2,00,000 - ₹10,00,000",
            "activities": ["Small processing unit", "Cold storage", "Packaging unit", "Contract farming"],
            "profit_margin": "30-50%"
        },
        "large_scale": {
            "investment": "₹10,00,000+",
            "activities": ["Export oriented unit", "Food processing plant", "Bulk storage", "Brand development"],
            "profit_margin": "40-60%"
        }
    },
    
    // GOVERNMENT SCHEMES
    "government_schemes": {
        "soil_health": {
            "name": "Soil Health Card Scheme",
            "benefit": "Free soil testing every 3 years",
            "eligibility": "All farmers",
            "how_to_apply": "Contact local KVK or Agriculture Department"
        },
        "organic": {
            "name": "Paramparagat Krishi Vikas Yojana (PKVY)",
            "benefit": "₹50,000/acre for 3 years for organic farming",
            "eligibility": "Farmers groups of 50+ acres",
            "how_to_apply": "Through State Agriculture Department"
        },
        "micro_irrigation": {
            "name": "Per Drop More Crop",
            "benefit": "55-90% subsidy on drip/sprinkler",
            "eligibility": "All farmers",
            "how_to_apply": "Agriculture/Horticulture Department"
        },
        "processing": {
            "name": "PM Formalisation of Micro Food Processing Enterprises",
            "benefit": "35% capital subsidy",
            "eligibility": "Individual entrepreneurs/SHGs/FPOs",
            "how_to_apply": "Through State Nodal Agency"
        }
    }
};

// DOM Elements
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const landSizeInput = document.getElementById('landSize');
const landUnitSelect = document.getElementById('landUnit');
const seasonSelect = document.getElementById('season');
const cropForm = document.getElementById('cropForm');
const resultsSection = document.getElementById('results');
const resultContent = document.getElementById('resultContent');
const loadingDiv = document.getElementById('loading');
const backBtn = document.getElementById('backBtn');
const formCard = document.querySelector('.form-card');

// Soil Confirmation Modal Elements
let soilConfirmationModal;
let selectedSoilType = '';

// Initialize
window.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 Soil-Based Crop Advisor Started');
    populateStateDropdown();
    citySelect.disabled = true;
    citySelect.innerHTML = '<option value="">-- First select State --</option>';
    createSoilConfirmationModal();
});

// Create Soil Confirmation Modal - SIMPLIFIED VERSION
function createSoilConfirmationModal() {
    const modalHTML = `
        <div id="soilConfirmModal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto;">
            <div class="modal-content" style="background: white; margin: 50px auto; padding: 30px; border-radius: 15px; width: 90%; max-width: 900px; box-shadow: 0 10px 50px rgba(0,0,0,0.3);">
                <div class="modal-header">
                    <h2 style="color: #5D4037; margin-top: 0;"><i class="fas fa-check-circle"></i> Confirm Your Soil Type</h2>
                    <p>We detected <span id="detectedSoil" style="font-weight: bold; color: #8D6E63;">Alluvial Soil</span> in your area. Please confirm or select correct type:</p>
                </div>
                <div class="modal-body">
                    <div class="soil-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
                        <div class="soil-option" data-soil="alluvial" style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; cursor: pointer; transition: all 0.3s;">
                            <h3>Alluvial Soil</h3>
                            <p>Fine texture, rich in potash & lime...</p>
                            <div class="soil-tags" style="display: flex; gap: 10px; margin-top: 10px;">
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Water: Good</span>
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Fertility: High</span>
                            </div>
                        </div>
                        <div class="soil-option" data-soil="black" style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; cursor: pointer; transition: all 0.3s;">
                            <h3>Black Soil</h3>
                            <p>Clayey, rich in iron, lime, calcium...</p>
                            <div class="soil-tags" style="display: flex; gap: 10px; margin-top: 10px;">
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Water: Very good</span>
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Fertility: High</span>
                            </div>
                        </div>
                        <div class="soil-option" data-soil="red_yellow" style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; cursor: pointer; transition: all 0.3s;">
                            <h3>Red & Yellow Soil</h3>
                            <p>Sandy loam, rich in iron oxides...</p>
                            <div class="soil-tags" style="display: flex; gap: 10px; margin-top: 10px;">
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Water: Medium</span>
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Fertility: Medium</span>
                            </div>
                        </div>
                        <div class="soil-option" data-soil="laterite" style="padding: 20px; border: 2px solid #ddd; border-radius: 10px; cursor: pointer; transition: all 0.3s;">
                            <h3>Laterite Soil</h3>
                            <p>Acidic, rich in iron & aluminum...</p>
                            <div class="soil-tags" style="display: flex; gap: 10px; margin-top: 10px;">
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Water: Poor</span>
                                <span class="tag" style="background: #F5F5F5; padding: 5px 10px; border-radius: 15px; font-size: 12px;">Fertility: Low</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-actions" style="margin-top: 30px; display: flex; gap: 15px;">
                        <button id="confirmSoil" class="btn btn-primary" style="padding: 12px 25px; background: #8D6E63; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-check"></i> Confirm & Continue
                        </button>
                        <button id="skipSoil" class="btn btn-secondary" style="padding: 12px 25px; background: #A1887F; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-forward"></i> Use Detected Soil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    soilConfirmationModal = document.getElementById('soilConfirmModal');
    
    // Add event listeners
    document.querySelectorAll('.soil-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.soil-option').forEach(opt => {
                opt.style.borderColor = '#ddd';
                opt.style.background = 'white';
            });
            this.style.borderColor = '#4CAF50';
            this.style.background = '#E8F5E9';
            selectedSoilType = this.dataset.soil;
            document.getElementById('detectedSoil').textContent = soilCropDatabase.soil_types[selectedSoilType].name;
        });
    });
    
    document.getElementById('confirmSoil').addEventListener('click', function() {
        if (selectedSoilType) {
            soilConfirmationModal.style.display = 'none';
            localStorage.setItem('userSoilType', selectedSoilType);
            proceedWithRecommendation();
        } else {
            alert('Please select a soil type or click "Use Detected Soil"');
        }
    });
    
    document.getElementById('skipSoil').addEventListener('click', function() {
        soilConfirmationModal.style.display = 'none';
        proceedWithRecommendation();
    });
    
    // Close modal on outside click
    soilConfirmationModal.addEventListener('click', function(e) {
        if (e.target === soilConfirmationModal) {
            soilConfirmationModal.style.display = 'none';
        }
    });
}

// Show Soil Confirmation Modal
function showSoilConfirmation(soilName, district) {
    console.log("Showing soil confirmation for:", soilName, district);
    document.getElementById('detectedSoil').textContent = soilName;
    
    // Find soil type key from name
    for (const [key, soil] of Object.entries(soilCropDatabase.soil_types)) {
        if (soil.name === soilName) {
            selectedSoilType = key;
            break;
        }
    }
    
    if (!selectedSoilType) selectedSoilType = 'alluvial';
    
    const userSoil = localStorage.getItem('userSoilType');
    if (userSoil) {
        if (confirm(`Use your previous soil selection (${soilCropDatabase.soil_types[userSoil]?.name || userSoil})?`)) {
            selectedSoilType = userSoil;
            proceedWithRecommendation();
            return;
        }
    }
    
    soilConfirmationModal.style.display = 'block';
}

// Populate States with soil info
function populateStateDropdown() {
    const states = [
        { value: "punjab", name: "Punjab (Alluvial Soil)" },
        { value: "haryana", name: "Haryana (Alluvial & Sandy)" },
        { value: "uttar_pradesh", name: "Uttar Pradesh (Alluvial)" },
        { value: "madhya_pradesh", name: "Madhya Pradesh (Black Soil)" },
        { value: "maharashtra", name: "Maharashtra (Black & Red)" },
        { value: "rajasthan", name: "Rajasthan (Desert & Red)" },
        { value: "gujarat", name: "Gujarat (Black & Alluvial)" },
        { value: "bihar", name: "Bihar (Alluvial & Red-Yellow)" },
        { value: "west_bengal", name: "West Bengal (Alluvial & Laterite)" },
        { value: "karnataka", name: "Karnataka (Red & Black)" },
        { value: "tamil_nadu", name: "Tamil Nadu (Red & Black)" },
        { value: "andhra_pradesh", name: "Andhra Pradesh (Red & Black)" },
        { value: "telangana", name: "Telangana (Red & Black)" },
        { value: "kerala", name: "Kerala (Laterite & Alluvial)" },
        { value: "odisha", name: "Odisha (Red & Laterite)" },
        { value: "jharkhand", name: "Jharkhand (Red & Yellow)" }
    ];
    
    stateSelect.innerHTML = '<option value="">-- Select State --</option>';
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.value;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
}

// State Change Handler
stateSelect.addEventListener('change', function() {
    const selectedState = this.value;
    
    citySelect.innerHTML = '<option value="">-- Select District --</option>';
    
    if (selectedState && stateDistricts[selectedState]) {
        const districts = [...stateDistricts[selectedState]].sort();
        
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            
            // Add soil info as data attribute if available
            if (soilCropDatabase.state_soil_mapping[selectedState]?.districts_soil[district]) {
                const soilInfo = soilCropDatabase.state_soil_mapping[selectedState].districts_soil[district];
                option.dataset.soil = soilInfo.type;
                option.dataset.quality = soilInfo.quality;
            }
            
            citySelect.appendChild(option);
        });
        
        citySelect.disabled = false;
        citySelect.style.opacity = "1";
        
    } else {
        citySelect.disabled = true;
        citySelect.style.opacity = "0.6";
    }
});

// Form Submission
cropForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const stateKey = stateSelect.value;
    const district = citySelect.value;
    const landSize = landSizeInput.value;
    const landUnit = landUnitSelect.value;
    const season = seasonSelect.value;
    
    console.log("Form submitted:", {stateKey, district, landSize, landUnit, season});
    
    // Validation
    if (!stateKey || !district || !landSize || !season) {
        alert('Please fill all fields to get soil-based recommendation!');
        return;
    }
    
    if (isNaN(landSize) || parseFloat(landSize) <= 0) {
        alert('Please enter valid land size!');
        return;
    }
    
    // Store form data for later use
    window.formData = {
        state: stateKey,
        district: district,
        landSize: landSize,
        landUnit: landUnit,
        season: season
    };
    
    // Get soil data for the district
    const soilData = getSoilDataForDistrict(stateKey, district);
    console.log("Soil data:", soilData);
    
    // Show soil confirmation modal
    showSoilConfirmation(soilData.soil_name, district);
});

// Proceed with recommendation after soil confirmation
function proceedWithRecommendation() {
    if (!window.formData) {
        console.error("No form data found!");
        return;
    }
    
    const formData = window.formData;
    const { state, district, landSize, landUnit, season } = formData;
    
    console.log("Proceeding with recommendation:", formData, "Selected soil:", selectedSoilType);
    
    // Show loading
    if (formCard) formCard.style.display = 'none';
    if (resultsSection) resultsSection.classList.remove('hidden');
    if (loadingDiv) {
        loadingDiv.classList.remove('hidden');
        loadingDiv.innerHTML = `
            <div class="loading-content" style="text-align: center; padding: 40px;">
                <div class="spinner" style="border: 5px solid #f3f3f3; border-top: 5px solid #8D6E63; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <h3>Analyzing Soil & Climate...</h3>
                <p>🧪 Checking ${district}'s soil type</p>
                <p>🌡️ Analyzing temperature and rainfall for ${season}</p>
                <p>🌾 Selecting crops based on soil fertility</p>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
    }
    
    if (resultContent) resultContent.innerHTML = '';
    
    setTimeout(() => {
        try {
            if (loadingDiv) loadingDiv.classList.add('hidden');
            const soilData = getSoilDataForDistrict(state, district);
            
            // Override with user selected soil type
            if (selectedSoilType && soilData.soil_type !== selectedSoilType) {
                console.log("Overriding soil type to:", selectedSoilType);
                const newSoilInfo = soilCropDatabase.soil_types[selectedSoilType];
                if (newSoilInfo) {
                    soilData.soil_type = selectedSoilType;
                    soilData.soil_name = newSoilInfo.name;
                    soilData.characteristics = newSoilInfo.characteristics;
                    soilData.water_retention = newSoilInfo.water_retention;
                    soilData.fertility = newSoilInfo.fertility;
                    soilData.pH_range = newSoilInfo.pH_range;
                }
            }
            
            const recommendation = getSoilBasedRecommendation(soilData, season, landSize, district, state);
            displaySoilBasedResults(recommendation, soilData, formData);
        } catch (error) {
            console.error("Error in recommendation:", error);
            if (loadingDiv) loadingDiv.classList.add('hidden');
            showGeneralRecommendation(state, district, season);
        }
    }, 1500);
}

// Get Soil Data for District
function getSoilDataForDistrict(stateKey, district) {
    console.log("Getting soil data for:", stateKey, district);
    
    if (soilCropDatabase.state_soil_mapping[stateKey] && 
        soilCropDatabase.state_soil_mapping[stateKey].districts_soil[district]) {
        
        const districtSoil = soilCropDatabase.state_soil_mapping[stateKey].districts_soil[district];
        const soilType = districtSoil.type;
        const soilInfo = soilCropDatabase.soil_types[soilType] || soilCropDatabase.soil_types.alluvial;
        const soilCrops = soilCropDatabase.soil_based_crops[soilType] || soilCropDatabase.soil_based_crops.alluvial;
        
        return {
            soil_type: soilType,
            soil_name: soilInfo.name,
            soil_quality: districtSoil.quality,
            special_note: districtSoil.special_note,
            characteristics: soilInfo.characteristics,
            water_retention: soilInfo.water_retention,
            fertility: soilInfo.fertility,
            pH_range: soilInfo.pH_range,
            suitable_crops: soilCrops[seasonSelect.value.toLowerCase()] || soilCrops.kharif || [],
            best_for: soilCrops.best_for,
            industry_connections: soilCrops.industry_connections || [],
            market_value: soilCrops.market_value || "Medium",
            fertilizer_requirement: soilCrops.fertilizer_requirement,
            improvement_methods: soilCrops.improvement_methods
        };
    }
    
    // Default if no specific data
    return getDefaultSoilData(stateKey);
}

function getDefaultSoilData(stateKey) {
    const stateSoil = soilCropDatabase.state_soil_mapping[stateKey] || 
                     {primary_soil: "alluvial", soil_distribution: {alluvial: "100%"}};
    
    const soilType = stateSoil.primary_soil;
    const soilInfo = soilCropDatabase.soil_types[soilType];
    const soilCrops = soilCropDatabase.soil_based_crops[soilType];
    
    return {
        soil_type: soilType,
        soil_name: soilInfo.name,
        soil_quality: "Medium",
        special_note: "General soil type for the state",
        characteristics: soilInfo.characteristics,
        water_retention: soilInfo.water_retention,
        fertility: soilInfo.fertility,
        pH_range: soilInfo.pH_range,
        suitable_crops: soilCrops.kharif || [],
        best_for: soilCrops.best_for,
        industry_connections: soilCrops.industry_connections || [],
        market_value: soilCrops.market_value || "Medium",
        fertilizer_requirement: soilCrops.fertilizer_requirement,
        improvement_methods: soilCrops.improvement_methods
    };
}
//here 

// Get Soil-Based Recommendation
function getSoilBasedRecommendation(soilData, season, landSize, district, state) {
    const seasonKey = season.toLowerCase();
    const crops = soilData.suitable_crops || ["Wheat", "Rice"];
    
    // Select primary crop based on soil type
    let primaryCrop = crops[0] || "Wheat";
    let whySuitable = "";
    
    // Detailed explanation based on soil type
    switch(soilData.soil_type) {
        case "alluvial":
            whySuitable = `Alluvial soil in ${soilData.soil_quality} quality is perfect for ${primaryCrop}. ${soilData.characteristics}. Best for ${soilData.best_for}. High water retention allows less irrigation.`;
            if (seasonKey === "kharif") primaryCrop = "Rice (Basmati)";
            if (seasonKey === "rabi") primaryCrop = "Wheat (Sharbati)";
            break;
            
        case "black":
            whySuitable = `Black cotton soil with ${soilData.fertility} fertility retains moisture well. ${soilData.characteristics}. Ideal for ${soilData.best_for}. Perfect for rainfed agriculture.`;
            if (seasonKey === "kharif") primaryCrop = "Cotton (BT Cotton)";
            if (seasonKey === "rabi") primaryCrop = "Wheat";
            break;
            
        case "red_yellow":
            whySuitable = `Red & Yellow soil with ${soilData.water_retention} water retention. ${soilData.characteristics}. Suitable for ${soilData.best_for}. Needs organic matter addition.`;
            if (seasonKey === "kharif") primaryCrop = "Groundnut (Virginia)";
            if (seasonKey === "rabi") primaryCrop = "Gram (Chana)";
            break;
            
        case "desert":
            whySuitable = `Desert soil needs careful water management. ${soilData.characteristics}. Best for ${soilData.best_for}. Drip irrigation essential.`;
            if (seasonKey === "kharif") primaryCrop = "Bajra (Pearl millet)";
            if (seasonKey === "rabi") primaryCrop = "Gram";
            break;
            
        case "laterite":
            whySuitable = `Laterite soil is acidic but good for plantations. ${soilData.characteristics}. Best for ${soilData.best_for}. Add lime for pH correction.`;
            if (seasonKey === "kharif") primaryCrop = "Cashew";
            if (seasonKey === "rabi") primaryCrop = "Ragi";
            break;
            
        default:
            whySuitable = `${soilData.soil_name} with ${soilData.fertility} fertility. ${soilData.characteristics}.`;
    }
    
    // Calculate costs based on soil fertility
    let costPerAcre, expectedYield, expectedIncome, profitMargin;
    
    if (soilData.fertility.toLowerCase().includes("very high")) {
        expectedYield = "25-35 quintals/acre";
        costPerAcre = "₹35,000-45,000";
        expectedIncome = "₹70,000-90,000/acre";
        profitMargin = "60-70%";
    } else if (soilData.fertility.toLowerCase().includes("high")) {
        expectedYield = "20-30 quintals/acre";
        costPerAcre = "₹30,000-40,000";
        expectedIncome = "₹60,000-80,000/acre";
        profitMargin = "50-60%";
    } else if (soilData.fertility.toLowerCase().includes("medium")) {
        expectedYield = "15-25 quintals/acre";
        costPerAcre = "₹25,000-35,000";
        expectedIncome = "₹45,000-65,000/acre";
        profitMargin = "40-50%";
    } else if (soilData.fertility.toLowerCase().includes("low")) {
        expectedYield = "10-20 quintals/acre";
        costPerAcre = "₹20,000-30,000";
        expectedIncome = "₹35,000-50,000/acre";
        profitMargin = "30-40%";
    } else {
        expectedYield = "8-15 quintals/acre";
        costPerAcre = "₹15,000-25,000";
        expectedIncome = "₹25,000-40,000/acre";
        profitMargin = "20-30%";
    }
    
    // Adjust for land size
    const size = parseFloat(landSize);
    if (!isNaN(size) && size > 0) {
        try {
            const costMatch = costPerAcre.match(/\d+/g);
            if (costMatch && costMatch.length >= 2) {
                const costMin = parseInt(costMatch[0]) * size;
                const costMax = parseInt(costMatch[1]) * size;
                costPerAcre = `₹${costMin.toLocaleString()}-${costMax.toLocaleString()} total`;
            }
            
            const incomeMatch = expectedIncome.match(/\d+/g);
            if (incomeMatch && incomeMatch.length >= 2) {
                const incomeMin = parseInt(incomeMatch[0]) * size;
                const incomeMax = parseInt(incomeMatch[1]) * size;
                expectedIncome = `₹${incomeMin.toLocaleString()}-${incomeMax.toLocaleString()} total`;
            }
        } catch (e) {
            console.error("Error calculating financials:", e);
        }
    }
    
    // Get industry connections
    const industryConnections = soilData.industry_connections || [];
    const localIndustries = getLocalIndustries(district, state);
    
    // Get scaling opportunities
    const scaling = getScalingOpportunities(size);
    
    // Get government schemes
    const schemes = getApplicableSchemes(soilData.soil_type, district);
    
    return {
        primary_crop: primaryCrop,
        why_this_crop: whySuitable,
        all_suitable_crops: crops,
        soil_type: soilData.soil_type,
        soil_name: soilData.soil_name,
        soil_quality: soilData.soil_quality,
        expected_yield: expectedYield,
        cost_per_acre: costPerAcre,
        expected_income: expectedIncome,
        profit_margin: profitMargin,
        fertilizer_requirement: soilData.fertilizer_requirement,
        improvement_methods: soilData.improvement_methods,
        industry_connections: industryConnections,
        local_industries: localIndustries,
        irrigation_need: getIrrigationNeed(soilData.water_retention),
        soil_test_recommendation: getSoilTestRecommendation(soilData.soil_type),
        scaling_opportunities: scaling,
        government_schemes: schemes,
        market_value: soilData.market_value
    };
}

// Get local industries for the district
function getLocalIndustries(district, state) {
    const industryMap = {
        "jamui": ["Stone crushing units", "Rice mills", "Dal mills", "Oil extraction units"],
        "patna": ["Food processing parks", "Rice mills", "Fruit processing", "Dairy plants"],
        "muzaffarpur": ["Litchi processing", "Fruit pulp units", "Cold storage chains"],
        "gaya": ["Dal mills", "Oil mills", "Spice processing"],
        "bhagalpur": ["Silk industry", "Makhana processing", "Fruit processing"],
        "purnia": ["Jute mills", "Maize processing", "Makhana units"]
    };
    
    const key = district.toLowerCase();
    return industryMap[key] || ["Agriculture-based industries", "Food processing", "Cold storage"];
}

// Get scaling opportunities based on land size
function getScalingOpportunities(landSize) {
    if (landSize < 5) {
        return soilCropDatabase.scaling_opportunities.small_scale;
    } else if (landSize < 20) {
        return soilCropDatabase.scaling_opportunities.medium_scale;
    } else {
        return soilCropDatabase.scaling_opportunities.large_scale;
    }
}

// Get applicable government schemes
function getApplicableSchemes(soilType, district) {
    const schemes = [];
    
    schemes.push(soilCropDatabase.government_schemes.soil_health);
    
    if (soilType === "red_yellow" || soilType === "laterite") {
        schemes.push(soilCropDatabase.government_schemes.organic);
    }
    
    if (soilType === "desert" || soilType === "red_yellow") {
        schemes.push(soilCropDatabase.government_schemes.micro_irrigation);
    }
    
    schemes.push(soilCropDatabase.government_schemes.processing);
    
    return schemes;
}

function getIrrigationNeed(waterRetention) {
    switch(waterRetention) {
        case "Very good": return "2-3 irrigations in entire season";
        case "Good": return "3-4 irrigations needed";
        case "Medium": return "4-6 irrigations needed";
        case "Poor": return "Drip irrigation essential (weekly irrigation)";
        case "Very poor": return "Regular irrigation critical (twice weekly)";
        default: return "As per crop requirement";
    }
}

function getSoilTestRecommendation(soilType) {
    const recommendations = {
        "alluvial": "Test for N, P, K levels. Usually rich in potash, may need nitrogen.",
        "black": "Test for calcium, magnesium, pH. Usually alkaline, may need sulfur.",
        "red_yellow": "Test for acidity (pH), iron, phosphorus. Add lime if pH < 6.0.",
        "laterite": "Test for acidity, aluminum toxicity. Add organic matter and lime.",
        "desert": "Test for salinity, pH, micronutrients. Use gypsum if saline.",
        "sandy_loam": "Test for all nutrients. Sandy soils leach nutrients quickly."
    };
    return recommendations[soilType] || "Get complete soil health card from KVK.";
}

// Display Soil-Based Results - SIMPLIFIED VERSION
function displaySoilBasedResults(recommendation, soilData, formData) {
    const { state, district, landSize, landUnit, season } = formData;
    const stateName = state.charAt(0).toUpperCase() + state.slice(1).replace('_', ' ');
    
    // Simple HTML for testing
    const html = `
        <div class="soil-recommendation" style="background: white; border-radius: 15px; padding: 30px; box-shadow: 0 5px 30px rgba(0,0,0,0.1); margin: 20px 0;">
            <!-- HEADER -->
            <div class="plan-header" style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #8D6E63;">
                <div class="header-icon" style="font-size: 60px; color: #8D6E63;">
                    <i class="fas fa-mountain"></i>
                </div>
                <div>
                    <h1 style="margin: 0; color: #5D4037; font-size: 32px;">🌾 Soil-Based Crop Recommendation</h1>
                    <p class="subtitle" style="color: #795548; margin: 10px 0 0 0; font-size: 18px;">${district}, ${stateName} | ${season} Season | ${landSize} ${landUnit}</p>
                    <div class="soil-badge" style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;">
                        <span class="badge soil-type-badge" style="padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: 600; background: #8D6E63; color: white;">${soilData.soil_name}</span>
                        <span class="badge quality-badge" style="padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: 600; background: #4CAF50; color: white;">${soilData.soil_quality} Quality</span>
                        <span class="badge season-badge" style="padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: 600; background: #2196F3; color: white;">${season}</span>
                    </div>
                </div>
            </div>
            
            <!-- SOIL ANALYSIS -->
            <div class="soil-analysis" style="background: #FFF8E1; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #5D4037;"><i class="fas fa-flask"></i> Soil Analysis Report</h2>
                <div class="soil-details" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                    <div class="soil-card" style="background: white; padding: 20px; border-radius: 10px; text-align: center; border-top: 4px solid #8D6E63;">
                        <h3 style="color: #5D4037; margin-top: 0;"><i class="fas fa-seedling"></i> Soil Type</h3>
                        <p class="soil-type" style="font-size: 20px; font-weight: bold; color: #5D4037; margin: 10px 0;">${soilData.soil_name}</p>
                        <p class="soil-quality" style="color: #388E3C; font-weight: 600;">Quality: <strong>${soilData.soil_quality}</strong></p>
                        <p class="soil-ph">pH Range: ${soilData.pH_range}</p>
                    </div>
                    
                    <div class="soil-card" style="background: white; padding: 20px; border-radius: 10px; text-align: center; border-top: 4px solid #8D6E63;">
                        <h3 style="color: #5D4037; margin-top: 0;"><i class="fas fa-tint"></i> Water Management</h3>
                        <p>Retention: <strong>${soilData.water_retention}</strong></p>
                        <p class="irrigation-note" style="color: #1976D2; font-weight: 600;">${recommendation.irrigation_need}</p>
                    </div>
                    
                    <div class="soil-card" style="background: white; padding: 20px; border-radius: 10px; text-align: center; border-top: 4px solid #8D6E63;">
                        <h3 style="color: #5D4037; margin-top: 0;"><i class="fas fa-chart-line"></i> Fertility & Yield</h3>
                        <p>Fertility: <strong>${soilData.fertility}</strong></p>
                        <p>Expected Yield: ${recommendation.expected_yield}</p>
                        <p>Profit Margin: ${recommendation.profit_margin}</p>
                    </div>
                </div>
                
                <div class="soil-characteristics" style="margin-top: 20px;">
                    <h3 style="color: #5D4037;"><i class="fas fa-clipboard-check"></i> Soil Characteristics</h3>
                    <p>${soilData.characteristics}</p>
                    <p class="special-note" style="background: #E8F5E9; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #4CAF50;">
                        <i class="fas fa-map-marker-alt"></i> <strong>${district} Special:</strong> ${soilData.special_note}
                    </p>
                </div>
            </div>
            
            <!-- PRIMARY RECOMMENDATION -->
            <div class="primary-recommendation" style="margin: 30px 0;">
                <h2 style="color: #5D4037;"><i class="fas fa-star"></i> Best Crop for ${soilData.soil_name}</h2>
                <div class="crop-card" style="background: linear-gradient(135deg, #D7CCC8, #BCAAA4); border-radius: 12px; padding: 25px; display: flex; align-items: center; gap: 20px; border: 2px solid #8D6E63;">
                    <div class="crop-icon" style="font-size: 50px; color: #5D4037;">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="crop-details">
                        <h3 style="margin: 0 0 10px 0; color: #3E2723; font-size: 28px;">${recommendation.primary_crop}</h3>
                        <p class="crop-reason" style="margin: 10px 0; font-size: 16px;">${recommendation.why_this_crop}</p>
                        <p class="season-note" style="background: #FFECB3; padding: 8px 15px; border-radius: 20px; display: inline-block; margin-top: 10px;">
                            Recommended for <strong>${season}</strong> season in ${district}
                        </p>
                    </div>
                </div>
            </div>
            
           <div class="all-crops-section" style="margin: 30px 0;">
    <h2 style="color: #5D4037;"><i class="fas fa-list"></i> All Suitable Crops for ${soilData.soil_name}</h2>
    
    <!-- Instruction for farmer -->
    <p style="color: #666; margin-bottom: 15px; font-size: 14px;">
        <i class="fas fa-hand-pointer"></i> Click on any crop below to see detailed week-by-week farming plan:
    </p>
    
    <div class="crops-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
        ${recommendation.all_suitable_crops.map(crop => `
            <div class="crop-item" 
                 onclick="showCropPlan('${crop.replace(/'/g, "\\'")}')"
                 style="padding: 15px; background: #E8F5E9; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; border-left: 4px solid #4CAF50; cursor: pointer; transition: all 0.3s ease;"
                 onmouseover="this.style.background='#C8E6C9'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)';"
                 onmouseout="this.style.background='#E8F5E9'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-seedling" style="color: #4CAF50;"></i>
                    <span style="font-weight: 600;">${crop}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <span style="font-size: 12px; color: #388E3C;">View Plan</span>
                    <i class="fas fa-chevron-right" style="color: #388E3C; font-size: 12px;"></i>
                </div>
            </div>
        `).join('')}
    </div>
</div>
<!-- CROP PLAN MODAL -->
<div id="cropPlanModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; overflow-y: auto; padding: 20px;">
    <div style="background: white; margin: 30px auto; padding: 30px; border-radius: 15px; width: 95%; max-width: 800px; box-shadow: 0 15px 50px rgba(0,0,0,0.3); position: relative;">
        
        <!-- CLOSE BUTTON -->
        <button onclick="closeCropPlan()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 24px; color: #5D4037; cursor: pointer; padding: 5px 10px; border-radius: 50%;">
            <i class="fas fa-times"></i>
        </button>
        
        <!-- MODAL HEADER -->
        <div style="margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid #8D6E63;">
            <h2 style="color: #5D4037; margin-top: 0; font-size: 28px;">
                <i class="fas fa-calendar-alt"></i> 
                <span id="cropPlanTitle">Crop Farming Plan</span>
            </h2>
            <p id="cropPlanSubtitle" style="color: #795548; margin: 5px 0 0 0; font-size: 16px;">
                Detailed week-by-week guide
            </p>
        </div>
        
        <!-- MODAL CONTENT -->
        <div id="cropPlanContent" style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
            <!-- Plan will be inserted here dynamically -->
        </div>
        
    </div>
</div>
            
            <!-- FINANCIAL PROJECTION -->
            <div class="financial-projection" style="margin: 30px 0;">
                <h2 style="color: #5D4037;"><i class="fas fa-calculator"></i> Financial Projection for ${landSize} ${landUnit}</h2>
                <div class="financial-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                    <div class="finance-card" style="padding: 25px; text-align: center; border-radius: 10px; background: #E3F2FD;">
                        <h3 style="color: #1976D2;"><i class="fas fa-weight-hanging"></i> Expected Yield</h3>
                        <p class="amount" style="font-size: 24px; font-weight: bold; margin: 10px 0;">${recommendation.expected_yield}</p>
                        <p class="note" style="color: #666;">For ${soilData.soil_quality} quality soil</p>
                    </div>
                    
                    <div class="finance-card" style="padding: 25px; text-align: center; border-radius: 10px; background: #FFF3E0;">
                        <h3 style="color: #F57C00;"><i class="fas fa-money-bill-wave"></i> Investment Required</h3>
                        <p class="amount" style="font-size: 24px; font-weight: bold; margin: 10px 0;">${recommendation.cost_per_acre}</p>
                        <p class="note" style="color: #666;">Includes seeds, fertilizers, labor</p>
                    </div>
                    
                    <div class="finance-card" style="padding: 25px; text-align: center; border-radius: 10px; background: #E8F5E9;">
                        <h3 style="color: #388E3C;"><i class="fas fa-chart-line"></i> Expected Income</h3>
                        <p class="amount income" style="font-size: 24px; font-weight: bold; margin: 10px 0; color: #388E3C;">${recommendation.expected_income}</p>
                        <p class="note" style="color: #666;">Gross income (Market price)</p>
                    </div>
                </div>
            </div>
            
            <!-- ACTION BUTTONS -->
            <div class="action-buttons" style="display: flex; gap: 15px; flex-wrap: wrap; margin: 30px 0;">
                <button onclick="printSoilReport()" class="btn" style="padding: 15px 25px; background: #5D4037; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-print"></i> Print Report
                </button>
                <button onclick="saveSoilData()" class="btn" style="padding: 15px 25px; background: #388E3C; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-save"></i> Save for Reference
                </button>
                <button onclick="newAnalysis()" class="btn" style="padding: 15px 25px; background: #F57C00; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-redo"></i> New Analysis
                </button>
            </div>
            
            <!-- DISCLAIMER -->
            <div class="disclaimer" style="background: #FFF3E0; padding: 20px; border-radius: 10px; margin-top: 30px; border-left: 4px solid #FF9800;">
                <p style="margin: 0;"><i class="fas fa-info-circle"></i> <strong>Note:</strong> This recommendation is based on general soil characteristics of ${district}. For exact recommendations, get soil tested at local KVK.</p>
            </div>
        </div>
    `;
    
    resultContent.innerHTML = html;
}

function showGeneralRecommendation(state, district, season) {
    resultContent.innerHTML = `
        <div class="general-recommendation" style="background: white; padding: 30px; border-radius: 15px; text-align: center;">
            <h2 style="color: #5D4037;"><i class="fas fa-seedling"></i> General Crop Recommendation</h2>
            <p>For ${district}, ${state} during ${season} season:</p>
            
            <div class="general-plan" style="background: #F5F5F5; padding: 20px; border-radius: 10px; margin-top: 20px;">
                <h3>Based on general soil type:</h3>
                <ul style="text-align: left; max-width: 600px; margin: 20px auto;">
                    <li>Get soil tested at local KVK for exact recommendations</li>
                    <li>Follow package of practices for your region</li>
                    <li>Consult local agriculture officer</li>
                    <li>Consider crop rotation for soil health</li>
                </ul>
                
                <p><strong>Visit KVK ${district} for detailed soil analysis and crop planning.</strong></p>
            </div>
            
            <button onclick="newAnalysis()" style="padding: 12px 25px; background: #8D6E63; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; margin-top: 20px;">
                <i class="fas fa-redo"></i> Try Again
            </button>
        </div>
    `;
}

// Action Functions
function printSoilReport() {
    window.print();
    alert('✅ Soil Report sent to printer!');
}

function saveSoilData() {
    const content = document.querySelector('.soil-recommendation').innerText;
    localStorage.setItem('soilReport', content);
    alert('✅ Soil analysis saved! You can refer to it later.');
}

function shareReport() {
    if (navigator.share) {
        navigator.share({
            title: 'Soil-Based Crop Recommendation',
            text: 'Check out this personalized crop recommendation based on soil type!',
            url: window.location.href
        });
    } else {
        alert('Share this URL: ' + window.location.href);
    }
}

function newAnalysis() {
    if (resultsSection) resultsSection.classList.add('hidden');
    if (formCard) formCard.style.display = 'block';
    if (cropForm) cropForm.reset();
    if (citySelect) {
        citySelect.disabled = true;
        citySelect.innerHTML = '<option value="">-- First select State --</option>';
    }
    selectedSoilType = '';
    window.formData = null;
}

// Back Button
if (backBtn) {
    backBtn.addEventListener('click', newAnalysis);
}
// ==============================================
// CROP PLANS DATABASE
// ==============================================
//Hey u can see//................................................//
// ==============================================
// COMPLETE CROP PLANS DATABASE
// ==============================================

const cropPlans = {
    // RED & YELLOW SOIL CROPS
    "Groundnut (Virginia)": {
        "weeks": {
            "week_1_2": "📅 Land Preparation: Deep ploughing (30-40 cm), harrowing, levelling field. Apply FYM @ 5-10 tonnes/acre. Apply gypsum @ 200 kg/acre to improve pod formation.",
            "week_3_4": "🌱 Sowing Time: Sow seeds @ 40-50 kg/acre. Spacing: 30x10 cm. Apply basal fertilizer: N:P:K = 20:60:40 kg/acre. Use seed treatment with Trichoderma.",
            "week_5_8": "🌿 Vegetative Stage: First manual weeding. Earthling up at 25-30 days after sowing. Light irrigation at peg formation. Watch for leaf miner.",
            "week_9_12": "🌸 Flowering Stage: Spray micronutrients (Boron @ 0.2%, Zinc @ 0.5%). Spray Carbendazim @ 1g/litre for leaf spot control. Maintain soil moisture.",
            "week_13_16": "🥜 Pod Development: Critical irrigation stage. Spray 2% DAP solution at pod filling. Control white grub with Chlorpyriphos.",
            "week_17_20": "📦 Harvesting: Harvest when leaves turn yellow & inner shell shows dark veins. Dry pods for 5-7 days (moisture < 10%). Store in dry place."
        },
        "monthly_plan": {
            "month_1": "Land preparation & sowing",
            "month_2": "Weeding & plant protection",
            "month_3": "Flowering & pod formation",
            "month_4": "Pod development & harvesting"
        },
        "key_tasks": ["Gypsum application", "Proper spacing", "Peg formation care", "Leaf spot control", "Timely harvest"],
        "critical_periods": ["Peg formation (30-35 DAS)", "Pod development (60-75 DAS)", "Flowering (45-50 DAS)"],
        "fertilizer_schedule": {
            "basal": "N:20, P:60, K:40 kg/acre",
            "top_dressing": "Gypsum: 200 kg at sowing",
            "foliar": "2% DAP at pod filling"
        }
    },
    
    "Ragi (Finger millet)": {
        "weeks": {
            "week_1_2": "🌱 Nursery Preparation: Prepare raised beds (1m width). Sow seeds @ 8-10 kg/acre for nursery. Treat seeds with Carbendazim.",
            "week_3_4": "🔄 Transplanting: Transplant 25-30 day old seedlings @ 2-3 seedlings/hill. Spacing: 20x10 cm. Apply FYM @ 4-5 tonnes/acre.",
            "week_5_6": "🌿 Vegetative Growth: First weeding & hoeing. Apply first dose of N @ 20 kg/acre. Maintain 2-3 cm water depth.",
            "week_7_8": "🌾 Tillering Stage: Second weeding. Apply second dose of N @ 20 kg/acre. Earth up to support plants.",
            "week_9_12": "🌸 Flowering: Maintain moisture. Control blast disease with Tricyclazole @ 0.6 g/litre. Spray 1% KNO3.",
            "week_13_16": "🌾 Grain Filling: Reduce irrigation gradually. Watch for grain discolouration. Control birds.",
            "week_17_20": "📦 Harvesting: Harvest when grains harden (80% maturity). Cut panicles first, then stalks. Dry to 12% moisture."
        },
        "monthly_plan": {
            "month_1": "Nursery preparation",
            "month_2": "Transplanting & establishment",
            "month_3": "Vegetative growth",
            "month_4": "Reproductive stage & harvest"
        },
        "key_tasks": ["Proper nursery", "Timely transplanting", "Blast disease control", "Moisture management", "Stage-wise harvesting"],
        "critical_periods": ["Transplanting (25-30 days)", "Flowering (55-65 DAS)", "Grain filling (70-80 DAS)"]
    },
    
    "Maize": {
        "weeks": {
            "week_1_2": "🌾 Land Preparation: Deep ploughing (25-30 cm). Apply FYM @ 5-6 tonnes/acre. Pre-sowing irrigation.",
            "week_3_4": "🌱 Sowing: Sow @ 8-10 kg/acre (hybrid) or 12-15 kg/acre (composite). Spacing: 60x20 cm. Apply basal fertilizer: 60:40:20 NPK.",
            "week_5_6": "🌿 Thinning & Weeding: Maintain 1 plant/hill. First weeding. Apply first top dressing @ 30 kg N/acre.",
            "week_7_8": "🦵 Knee-high Stage: Second weeding. Earthing up. Apply second top dressing @ 30 kg N/acre. Control weeds with Atrazine.",
            "week_9_12": "🌽 Tasseling & Silking: Critical irrigation stage. Control stem borer with Carbaryl 50WP @ 2g/litre. Spray 2% urea.",
            "week_13_16": "🌾 Grain Filling: Reduce irrigation. Watch for foliar diseases. Spray Mancozeb if needed.",
            "week_17_18": "📦 Harvesting: Harvest when husk turns yellow. Harvest cobs, dry to 20% moisture. Remove husk after drying."
        },
        "monthly_plan": {
            "month_1": "Sowing & establishment",
            "month_2": "Vegetative growth",
            "month_3": "Reproductive stage",
            "month_4": "Maturity & harvest"
        },
        "key_tasks": ["Proper spacing", "Stage-wise fertilization", "Stem borer control", "Tasseling stage care", "Timely harvest"],
        "critical_periods": ["Knee-high stage (30-35 DAS)", "Tasseling (55-60 DAS)", "Silking (65-70 DAS)"]
    },
    
    "Millets (Jowar, Bajra)": {
        "weeks": {
            "week_1_2": "🌾 Land Preparation: Summer ploughing. Apply FYM @ 3-4 tonnes/acre. Level field.",
            "week_3_4": "🌱 Sowing: Jowar @ 8-10 kg/acre, Bajra @ 3-4 kg/acre. Spacing: 45x15 cm. Apply basal fertilizer: 40:20:20 NPK.",
            "week_5_6": "🌿 Thinning & Weeding: Maintain plant population. First weeding. Apply N @ 20 kg/acre.",
            "week_7_8": "🌾 Tillering: Second weeding. Earth up. Apply N @ 20 kg/acre. Control shoot fly with seed treatment.",
            "week_9_10": "🌸 Flowering: Critical irrigation stage. Control smut in Jowar. Spray 2% DAP.",
            "week_11_14": "🌾 Grain Development: Reduce irrigation. Watch for grain molds. Control birds.",
            "week_15_18": "📦 Harvesting: Harvest when grains hard (80% maturity). Cut earheads first. Dry to 12-14% moisture."
        },
        "monthly_plan": {
            "month_1": "Sowing & establishment",
            "month_2": "Vegetative growth",
            "month_3": "Flowering & grain set",
            "month_4": "Maturity & harvest"
        },
        "key_tasks": ["Summer ploughing", "Proper spacing", "Shoot fly control", "Critical irrigation at flowering", "Stage-wise harvest"],
        "critical_periods": ["Tillering (25-30 DAS)", "Flowering (45-55 DAS)", "Grain filling (60-70 DAS)"]
    },
    
    "Pulses (Moong, Urad)": {
        "weeks": {
            "week_1_2": "🌾 Land Preparation: Fine tilth. Apply FYM @ 2-3 tonnes/acre. Treat seeds with Rhizobium + PSB.",
            "week_3_4": "🌱 Sowing: Moong @ 10-12 kg/acre, Urad @ 12-15 kg/acre. Spacing: 30x10 cm. Apply SSP @ 100 kg/acre.",
            "week_5_6": "🌿 Weeding: First weeding at 20-25 DAS. Apply 20 kg N/acre for Urad. Control whitefly.",
            "week_7_8": "🌸 Flowering: Spray 2% DAP. Control pod borer with NSKE @ 5% or Indoxacarb. Maintain soil moisture.",
            "week_9_10": "🌱 Pod Formation: Maintain soil moisture. Watch for yellow mosaic virus. Spray Imidacloprid if needed.",
            "week_11_14": "🌾 Pod Maturity: Reduce irrigation. Multiple pickings for Moong (3-4 pickings at 7-10 days interval).",
            "week_15_16": "📦 Harvesting: Harvest when pods turn black. Urad: single harvest. Dry pods to 10% moisture."
        },
        "monthly_plan": {
            "month_1": "Sowing & establishment",
            "month_2": "Flowering",
            "month_3": "Pod development",
            "month_4": "Harvesting"
        },
        "key_tasks": ["Rhizobium treatment", "Timely weeding", "Pod borer control", "Multiple pickings for Moong", "Proper drying"],
        "critical_periods": ["Flowering (35-40 DAS)", "Pod formation (50-60 DAS)"]
    },
    
    "Beans": {
        "weeks": {
            "week_1_2": "🌾 Land Preparation: Plough 2-3 times, make fine tilth. Apply FYM @ 4-5 tonnes/acre. Form ridges 45-60 cm apart.",
            "week_3_4": "🌱 Sowing: Sow seeds @ 8-10 kg/acre. Spacing: 30x10 cm for bush beans, 60x30 cm for pole beans. Apply basal fertilizer: N:P:K = 20:60:40 kg/acre.",
            "week_5_6": "🌿 Vegetative Growth: First weeding. Install trellis for pole beans. Apply first top dressing @ 20 kg N/acre. Watch for aphids.",
            "week_7_8": "🌸 Flowering Stage: Critical irrigation needed. Spray 0.5% Boron solution. Control flower drop with NAA @ 40 ppm.",
            "week_9_10": "🌱 Pod Setting: Maintain regular irrigation. Spray 2% DAP for better pod filling. Control pod borers with Spinosad.",
            "week_11_12": "🌾 Pod Development: Harvest tender pods for vegetable purpose. Continue irrigation. Watch for rust disease.",
            "week_13_14": "📦 Harvesting: For dry beans, harvest when pods turn yellow-brown. Dry pods, thresh, store at 12% moisture."
        },
        "monthly_plan": {
            "month_1": "Land prep & sowing",
            "month_2": "Vegetative growth & support",
            "month_3": "Flowering & pod set",
            "month_4": "Harvesting (multiple pickings)"
        },
        "key_tasks": ["Trellis installation for pole beans", "Timely weeding", "Boron application at flowering", "Multiple harvests", "Rust disease control"],
        "critical_periods": ["Flowering (40-45 DAS)", "Pod setting (50-55 DAS)", "First harvest (60-65 DAS)"],
        "harvest_schedule": {
            "tender_pods": "Start at 60 DAS, continue weekly",
            "dry_beans": "Harvest at 90-100 DAS"
        }
    },
    
    "Vegetables": {
        "weeks": {
            "week_1_2": "🌾 Land Preparation: Prepare raised beds (1m wide). Apply FYM @ 8-10 tonnes/acre. Treat soil with Trichoderma.",
            "week_3_4": "🌱 Sowing/Transplanting: Prepare nursery or direct sowing. Spacing as per vegetable type. Apply basal fertilizer: N:P:K = 50:80:40 kg/acre.",
            "week_5_6": "🌿 Early Growth: First weeding. Apply first top dressing @ 25 kg N/acre. Drip irrigation setup. Mulching with organic material.",
            "week_7_8": "🌱 Active Growth: Second weeding. Apply second top dressing @ 25 kg N/acre. Training and staking for climbers.",
            "week_9_10": "🌸 Flowering: Regular irrigation. Spray 0.5% Boron for fruit set. Control pests with neem oil spray.",
            "week_11_12": "🍅 Fruit Development: Harvest stage for leafy vegetables. Apply potash @ 20 kg/acre for fruiting vegetables.",
            "week_13_16": "📦 Harvesting: Multiple harvests for most vegetables. Post-harvest handling. Prepare for next crop."
        },
        "monthly_plan": {
            "month_1": "Land prep & planting",
            "month_2": "Vegetative growth",
            "month_3": "Flowering & fruiting",
            "month_4": "Harvest & post-harvest"
        },
        "key_tasks": ["Raised bed preparation", "Drip irrigation setup", "Regular harvesting", "Pest monitoring", "Crop rotation planning"],
        "critical_periods": ["Transplanting stage", "Flowering initiation", "First harvest"]
    },
    
    "Sesame": {
        "weeks": {
            "week_1_2": "🌾 Land Preparation: Fine tilth required. Apply FYM @ 3-4 tonnes/acre. Level field properly.",
            "week_3_4": "🌱 Sowing: Sow @ 2-3 kg/acre (bold seeded) or 3-4 kg/acre (small seeded). Spacing: 30x10 cm. Apply basal fertilizer: N:P:K = 20:40:20 kg/acre.",
            "week_5_6": "🌿 Early Growth: First weeding at 15-20 DAS. Thinning to maintain 1 plant/10 cm. Apply 10 kg N/acre.",
            "week_7_8": "🌱 Branching Stage: Second weeding. Watch for leaf roller and capsule borer. Spray Monocrotophos if infestation >5%.",
            "week_9_10": "🌸 Flowering: Critical stage for irrigation. Spray 0.2% Boron for better capsule set. Control wilt disease.",
            "week_11_12": "🌾 Capsule Development: Reduce irrigation. Watch for capsule shattering. Control pests in capsules.",
            "week_13_14": "📦 Harvesting: Harvest when lower leaves turn yellow & capsules turn brown. Cut plants, dry, thresh. Store at 8% moisture."
        },
        "monthly_plan": {
            "month_1": "Sowing & establishment",
            "month_2": "Vegetative growth",
            "month_3": "Flowering & capsule formation",
            "month_4": "Maturity & harvest"
        },
        "key_tasks": ["Fine tilth preparation", "Proper spacing", "Boron application", "Timely harvest to avoid shattering", "Proper drying"],
        "critical_periods": ["Flowering (35-40 DAS)", "Capsule formation (45-55 DAS)", "Harvest timing (75-85 DAS)"]
    },
    
    // ALLUVIAL SOIL CROPS
    "Rice (Basmati, Sona Masuri)": {
        "weeks": {
            "week_1_3": "🌱 Nursery Preparation: Prepare seedbed (100-200 sqm/acre). Soak seeds for 12 hrs. Sow @ 20-25 kg/acre for nursery.",
            "week_4_5": "🌾 Main Field Prep: Pudding, levelling. Apply FYM @ 5-6 tonnes/acre. Apply basal fertilizer: N:P:K = 30:40:20 kg/acre.",
            "week_6_7": "🔄 Transplanting: Transplant 25-30 day old seedlings. Spacing: 20x15 cm. 2-3 seedlings/hill. Maintain 2-3 cm water.",
            "week_8_9": "🌿 Vegetative: First weeding. Apply N @ 20 kg/acre. Control stem borer with Cartap hydrochloride.",
            "week_10_12": "🌾 Tillering: Second weeding. Apply N @ 20 kg/acre. Maintain water level. Control leaf folder.",
            "week_13_15": "🌸 Panicle Initiation: Critical stage. Apply N @ 20 kg/acre. Maintain 5-7 cm water. Control blast disease.",
            "week_16_18": "🌾 Flowering & Grain Fill: Reduce water gradually. Control brown plant hopper. Spray 2% DAP.",
            "week_19_22": "📦 Maturity & Harvest: Drain water completely. Harvest at 20-22% moisture. Dry to 14% for storage."
        },
        "monthly_plan": {
            "month_1": "Nursery preparation",
            "month_2": "Transplanting & establishment",
            "month_3": "Vegetative growth",
            "month_4": "Reproductive stage",
            "month_5": "Grain filling & harvest"
        },
        "key_tasks": ["Proper pudding", "Timely transplanting", "Water management", "Stem borer control", "Harvest at right moisture"],
        "critical_periods": ["Panicle initiation (55-60 DAT)", "Flowering (75-80 DAT)", "Grain filling (85-95 DAT)"]
    },
    
    "Wheat (Sharbati, Lokwan)": {
        "weeks": {
            "week_1_2": "🌾 Land Prep: 2-3 ploughings. Apply FYM @ 4-5 tonnes/acre. Pre-sowing irrigation (5-6 cm).",
            "week_3_4": "🌱 Sowing: Timely sowing (Nov 15-30). Seed rate: 40-45 kg/acre. Spacing: 22.5 cm rows. Apply basal fertilizer: 60:40:20 NPK.",
            "week_5_6": "🦶 Crown Root Initiation: First irrigation at 21 DAS. Apply first N dose @ 30 kg/acre. Control weeds with Sulfosulfuron.",
            "week_7_8": "🌾 Tillering: Second irrigation. Apply second N dose @ 30 kg/acre. Control rust with Propiconazole.",
            "week_9_12": "🌿 Stem Elongation: Third irrigation. Control aphids with Imidacloprid. Spray 1% KCl for lodging resistance.",
            "week_13_16": "🌸 Flowering & Grain Fill: Fourth irrigation. Watch for Karnal bunt. Spray Tebuconazole at flowering.",
            "week_17_20": "📦 Maturity: Stop irrigation. Harvest at grain moisture 20-25%. Dry to 12% for storage."
        },
        "monthly_plan": {
            "month_1": "Sowing & establishment",
            "month_2": "Tillering",
            "month_3": "Stem elongation",
            "month_4": "Reproductive stage",
            "month_5": "Maturity & harvest"
        },
        "key_tasks": ["Timely sowing", "CRI irrigation", "Rust control", "Terminal heat management", "Timely harvest"],
        "critical_periods": ["CRI stage (21 DAS)", "Flowering (70-75 DAS)", "Grain filling (85-95 DAS)"]
    }
};

// ==============================================
// FALLBACK PLAN FOR ANY CROP
// ==============================================

function getGenericCropPlan(cropName) {
    return {
        "weeks": {
            "week_1_2": `🌾 Land Preparation for ${cropName}: Prepare field with 2-3 ploughings. Apply FYM @ 4-5 tonnes/acre. Level the field properly.`,
            "week_3_4": `🌱 Sowing/Planting ${cropName}: Prepare seeds/seedlings. Follow recommended spacing. Apply basal fertilizer as per soil test.`,
            "week_5_6": `🌿 Vegetative Growth: First weeding and thinning. Apply first dose of nitrogen. Monitor for early pests and diseases.`,
            "week_7_8": `🌱 Active Growth: Second weeding. Apply second dose of fertilizer. Provide support if needed (staking/trellising).`,
            "week_9_10": `🌸 Flowering Stage: Critical irrigation period. Spray micronutrients if needed. Control flowering pests.`,
            "week_11_12": `🌾 Fruit/Pod Development: Regular irrigation. Monitor for fruit/pod borers. Apply potash for better quality.`,
            "week_13_14": `📦 Harvesting: Harvest at proper maturity stage. Handle produce carefully. Dry to safe moisture content.`
        },
        "monthly_plan": {
            "month_1": "Land preparation & sowing",
            "month_2": "Vegetative growth & weeding",
            "month_3": "Flowering & fruit set",
            "month_4": "Maturity & harvesting"
        },
        "key_tasks": [
            "Soil testing before planting",
            "Timely weeding and thinning",
            "Proper irrigation scheduling",
            "Regular pest monitoring",
            "Harvest at right maturity"
        ],
        "critical_periods": [
            "Germination/transplanting stage",
            "Flowering initiation",
            "Fruit/pod development stage"
        ]
    };
}

// ==============================================
// MODIFIED SHOW CROP PLAN FUNCTION
// ==============================================

function showCropPlan(cropName) {
    console.log("Showing plan for:", cropName);
    
    const modal = document.getElementById('cropPlanModal');
    const title = document.getElementById('cropPlanTitle');
    const subtitle = document.getElementById('cropPlanSubtitle');
    const content = document.getElementById('cropPlanContent');
    
    if (!modal) {
        console.error("Modal not found!");
        return;
    }
    
    // Set title
    title.textContent = `${cropName} Farming Plan`;
    subtitle.textContent = `Week-by-week detailed guide for ${cropName}`;
    
    // Get plan data - first check exact match, then partial match, then generic
    let plan = cropPlans[cropName];
    
    if (!plan) {
        // Try to find partial match (e.g., "Beans" in "Beans (Green Beans)")
        for (const key in cropPlans) {
            if (key.includes(cropName) || cropName.includes(key.split('(')[0].trim())) {
                plan = cropPlans[key];
                break;
            }
        }
        
        // If still not found, use generic plan
        if (!plan) {
            plan = getGenericCropPlan(cropName);
        }
    }
    
    // Build weekly plan HTML
    let weeksHTML = '';
    for (const [week, task] of Object.entries(plan.weeks)) {
        const weekNumber = week.split('_')[1];
        weeksHTML += `
            <div style="background: #F9F9F9; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #8D6E63; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <div style="background: #8D6E63; color: white; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: bold; margin-right: 15px; font-size: 16px;">
                        W${weekNumber}
                    </div>
                    <h3 style="margin: 0; color: #5D4037; font-size: 18px; font-weight: 600;">
                        ${week.replace('_', ' ').toUpperCase()}
                    </h3>
                </div>
                <p style="margin: 0; color: #333; line-height: 1.6; padding-left: 60px; font-size: 15px;">
                    ${task}
                </p>
            </div>
        `;
    }
    
    // Build monthly plan HTML
    let monthlyHTML = '';
    for (const [month, task] of Object.entries(plan.monthly_plan)) {
        const monthNumber = month.split('_')[1];
        monthlyHTML += `
            <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 10px; margin-bottom: 12px; border: 1px solid #E0E0E0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style="background: #5D4037; color: white; min-width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 10px; font-weight: bold; margin-right: 15px; font-size: 20px;">
                    M${monthNumber}
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #5D4037; margin-bottom: 5px; font-size: 16px;">${month.replace('_', ' ').toUpperCase()}</div>
                    <div style="color: #666; font-size: 14px;">${task}</div>
                </div>
            </div>
        `;
    }
    
    // Build key tasks HTML
    const keyTasksHTML = plan.key_tasks.map(task => `
        <div style="display: flex; align-items: flex-start; padding: 12px; border-bottom: 1px solid #F0F0F0; transition: background 0.3s;" 
             onmouseover="this.style.background='#F5F5F5'" 
             onmouseout="this.style.background='white'">
            <i class="fas fa-check-circle" style="color: #4CAF50; margin-right: 12px; margin-top: 3px; font-size: 16px;"></i>
            <span style="font-size: 14.5px;">${task}</span>
        </div>
    `).join('');
    
    // Build critical periods HTML
    const criticalHTML = plan.critical_periods.map(period => `
        <div style="background: #FFF3E0; padding: 15px; border-radius: 8px; margin-bottom: 12px; border-left: 4px solid #FF9800;">
            <div style="display: flex; align-items: center;">
                <i class="fas fa-exclamation-triangle" style="color: #FF9800; margin-right: 12px; font-size: 18px;"></i>
                <span style="font-weight: 600; color: #5D4037; font-size: 15px;">${period}</span>
            </div>
        </div>
    `).join('');
    
    // Combine all HTML
    content.innerHTML = `
        <div style="padding-right: 10px;">
            <!-- Action Timeline -->
            <div style="background: linear-gradient(135deg, #8D6E63, #5D4037); color: white; padding: 15px 20px; border-radius: 10px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(93, 64, 55, 0.3);">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <i class="fas fa-clock" style="font-size: 20px; margin-right: 10px;"></i>
                    <h3 style="margin: 0; font-size: 18px;">⏱️ Action Timeline for ${cropName}</h3>
                </div>
                <p style="margin: 0; opacity: 0.9; font-size: 14px;">Follow this weekly guide for best results. Adjust based on local weather conditions.</p>
            </div>
            
            <!-- Monthly Overview -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #5D4037; border-bottom: 2px solid #8D6E63; padding-bottom: 10px; margin-bottom: 15px; font-size: 20px;">
                    <i class="fas fa-calendar-check"></i> Monthly Overview
                </h3>
                <div>
                    ${monthlyHTML}
                </div>
            </div>
            
            <!-- Weekly Plan -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #5D4037; border-bottom: 2px solid #8D6E63; padding-bottom: 10px; margin-bottom: 15px; font-size: 20px;">
                    <i class="fas fa-tasks"></i> Week-by-Week Action Plan
                </h3>
                <div>
                    ${weeksHTML}
                </div>
            </div>
            
            <!-- Two Column Layout -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 30px;">
                <!-- Key Tasks -->
                <div>
                    <h3 style="color: #5D4037; border-bottom: 2px solid #8D6E63; padding-bottom: 10px; margin-bottom: 15px; font-size: 18px;">
                        <i class="fas fa-star"></i> Key Actions & Tasks
                    </h3>
                    <div style="background: white; border-radius: 10px; border: 1px solid #E0E0E0; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        ${keyTasksHTML}
                    </div>
                </div>
                
                <!-- Critical Periods -->
                <div>
                    <h3 style="color: #5D4037; border-bottom: 2px solid #8D6E63; padding-bottom: 10px; margin-bottom: 15px; font-size: 18px;">
                        <i class="fas fa-exclamation-circle"></i> Critical Periods
                    </h3>
                    <div>
                        ${criticalHTML}
                    </div>
                </div>
            </div>
            
            <!-- Farmer's Notes Section -->
            <div style="background: #E8F5E9; padding: 20px; border-radius: 10px; border-left: 4px solid #4CAF50; margin-top: 20px;">
                <h4 style="color: #388E3C; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-clipboard-check"></i> Farmer's Notes
                </h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                    <div>
                        <div style="font-weight: 600; color: #5D4037; margin-bottom: 5px;">🌱 Best Time to Start:</div>
                        <div style="color: #666; font-size: 14px;">As per local season timing</div>
                    </div>
                    <div>
                        <div style="font-weight: 600; color: #5D4037; margin-bottom: 5px;">💧 Water Needs:</div>
                        <div style="color: #666; font-size: 14px;">Moderate - Adjust based on rainfall</div>
                    </div>
                </div>
            </div>
            
            <!-- Disclaimer -->
            <div style="background: #FFF3E0; padding: 20px; border-radius: 10px; border-left: 4px solid #FF9800; margin-top: 20px;">
                <p style="margin: 0; color: #5D4037; font-size: 14.5px;">
                    <i class="fas fa-info-circle"></i> 
                    <strong>Important:</strong> This is a general farming plan. Always adjust practices based on:
                    <ul style="margin: 10px 0 0 20px; color: #666;">
                        <li>Local soil test results</li>
                        <li>Current weather conditions</li>
                        <li>Pest/disease situation in your area</li>
                        <li>Expert advice from local KVK/agriculture officer</li>
                    </ul>
                </p>
            </div>
            
            <!-- Action Buttons -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                <button onclick="printCropPlan('${cropName}')" style="padding: 12px 25px; background: #5D4037; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: all 0.3s;" 
                        onmouseover="this.style.background='#3E2723'; this.style.transform='translateY(-2px)'" 
                        onmouseout="this.style.background='#5D4037'; this.style.transform='translateY(0)'">
                    <i class="fas fa-print"></i> Print This Plan
                </button>
                <button onclick="saveCropPlan('${cropName}')" style="padding: 12px 25px; background: #388E3C; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: all 0.3s;"
                        onmouseover="this.style.background='#2E7D32'; this.style.transform='translateY(-2px)'" 
                        onmouseout="this.style.background='#388E3C'; this.style.transform='translateY(0)'">
                    <i class="fas fa-save"></i> Save Plan
                </button>
                <button onclick="closeCropPlan()" style="padding: 12px 25px; background: #F57C00; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: all 0.3s;"
                        onmouseover="this.style.background='#EF6C00'; this.style.transform='translateY(-2px)'" 
                        onmouseout="this.style.background='#F57C00'; this.style.transform='translateY(0)'">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        </div>
    `;
    
    // Show modal with animation
    modal.style.display = 'block';
    modal.style.animation = 'fadeIn 0.3s ease';
}

// ==============================================
// ANIMATION STYLE ADD
// ==============================================

// Add this CSS for animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    #cropPlanModal > div {
        animation: slideUp 0.3s ease;
    }
`;
document.head.appendChild(style);
// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('cropPlanModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});
// ... existing code continues ...
console.log('✅ Soil-Based Crop Advisor Ready! Working perfectly! 🚀');

