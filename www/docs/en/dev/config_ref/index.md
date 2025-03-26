<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yumzo</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
            color: #333;
        }
        header {
            background-color: #fff;
            color: #333;
            padding: 20px;
            text-align: center;
            position: relative;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
            color: #e84343;
        }
        header img {
            width: 60px;
            position: absolute;
            left: 20px;
            top: 10px;
        }
        .splash-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 2000;
            animation: fadeOut 2s ease-in-out forwards;
        }
        .splash-screen img {
            width: 120px;
            animation: bounce 2s ease-in-out;
        }
        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
            margin-top: 80px;
        }
        .category-box {
            background-color: #fff;
            border-radius: 8px;
            width: 300px;
            margin: 10px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .category-box:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .category-box h2 {
            margin: 0;
            font-size: 18px;
            color: #555;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: #fff;
            width: 80%;
            max-width: 600px;
            padding: 20px;
            border-radius: 8px;
            position: relative;
        }
        .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 20px;
            cursor: pointer;
            color: #e84343;
        }
        .meal-item {
            border-bottom: 1px solid #eee;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .meal-item:last-child {
            border-bottom: none;
        }
        .meal-item h3 {
            margin: 0;
            font-size: 16px;
            color: #555;
        }
        .meal-item p {
            margin: 5px 0;
            font-size: 14px;
            color: #777;
        }
        .meal-item span {
            font-weight: bold;
            color: #e84343;
        }
        .meal-item button {
            background-color: #e84343;
            color: #fff;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .meal-item button:hover {
            background-color: #d43c3c;
        }
        .cart-section {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .cart-total {
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
        .checkout-btn {
            background-color: #e84343;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .checkout-btn:hover {
            background-color: #d43c3c;
        }
        .delivery-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .delivery-modal-content {
            background-color: #fff;
            width: 80%;
            max-width: 400px;
            padding: 20px;
            border-radius: 8px;
            position: relative;
        }
        .delivery-modal select, .delivery-modal input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .delivery-modal button {
            background-color: #e84343;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
        }
        .delivery-modal button:hover {
            background-color: #d43c3c;
        }
    </style>
</head>
<body>
    <!-- Splash Screen -->
    <div class="splash-screen">
        <img src="https://i.imgur.com/8QXQz9S.png" alt="Yumzo Logo">
    </div>

    <header>
        <img src="https://i.imgur.com/8QXQz9S.png" alt="Yumzo Logo">
        <h1>Yumzo</h1>
    </header>
    <div class="container">
        <div class="category-box" onclick="openModal('fried-chicken')">
            <h2>فروج</h2>
        </div>
        <div class="category-box" onclick="openModal('eastern-food')">
            <h2>طعام شرقي</h2>
        </div>
        <div class="category-box" onclick="openModal('western-food')">
            <h2>طعام غربي</h2>
        </div>
        <div class="category-box" onclick="openModal('desserts')">
            <h2>حلويات</h2>
        </div>
        <div class="category-box" onclick="openModal('bakery')">
            <h2>معجنات</h2>
        </div>
        <div class="category-box" onclick="openModal('refreshments')">
            <h2>ضيافة</h2>
        </div>
        <div class="category-box" onclick="openModal('salty-snacks')">
            <h2>موالح</h2>
        </div>
    </div>

    <!-- Modal -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <div id="modal-body"></div>
        </div>
    </div>

    <!-- Cart Section -->
    <div class="cart-section">
        <div class="cart-total">إجمالي السلة: <span id="cart-total">0</span> ليرة سورية</div>
        <button class="checkout-btn" onclick="openDeliveryModal()">إتمام الطلب</button>
    </div>

    <!-- Delivery Modal -->
    <div id="delivery-modal" class="delivery-modal">
        <div class="delivery-modal-content">
            <span class="close" onclick="closeDeliveryModal()">&times;</span>
            <h2>حساب التوصيل</h2>
            <select id="restaurant-location">
                <option value="">اختر موقع المحل...</option>
                <option value="36.2010,37.1611">حلب الجديدة</option>
                <option value="36.1908,37.1567">العزيزية</option>
                <option value="36.1856,37.1489">السليمانية</option>
                <option value="36.1789,37.1345">الشهباء</option>
                <option value="36.1678,37.1234">الفرفور</option>
            </select>
            <select id="customer-location">
                <option value="">اختر موقع الزبون...</option>
                <option value="36.2010,37.1611">حلب الجديدة</option>
                <option value="36.1908,37.1567">العزيزية</option>
                <option value="36.1856,37.1489">السليمانية</option>
                <option value="36.1789,37.1345">الشهباء</option>
                <option value="36.1678,37.1234">الفرفور</option>
            </select>
            <button onclick="calculateDelivery()">احسب التكلفة</button>
            <p>تكلفة التوصيل: <span id="delivery-cost">0</span> ليرة سورية</p>
            <p>الإجمالي مع التوصيل: <span id="total-with-delivery">0</span> ليرة سورية</p>
        </div>
    </div>

    <script>
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        const cartTotalElement = document.getElementById('cart-total');
        const deliveryModal = document.getElementById('delivery-modal');
        const restaurantLocation = document.getElementById('restaurant-location');
        const customerLocation = document.getElementById('customer-location');
        const deliveryCostElement = document.getElementById('delivery-cost');
        const totalWithDeliveryElement = document.getElementById('total-with-delivery');

        let cartTotal = 0;

        function openModal(category) {
            modal.style.display = 'flex';
            let content = '';
            if (category === 'fried-chicken') {
                content = `
                    <h2>فروج</h2>
                    <div class="meal-item">
                        <h3>الفروج المشوي</h3>
                        <p><span>15000 ليرة</span></p>
                        <button onclick="addToCart(15000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>الفروج المقلي</h3>
                        <p><span>12000 ليرة</span></p>
                        <button onclick="addToCart(12000)">أضف إلى السلة</button>
                    </div>
                `;
            } else if (category === 'eastern-food') {
                content = `
                    <h2>طعام شرقي</h2>
                    <div class="meal-item">
                        <h3>المشاوي المختلطة</h3>
                        <p><span>20000 ليرة</span></p>
                        <button onclick="addToCart(20000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>الكبسة</h3>
                        <p><span>15000 ليرة</span></p>
                        <button onclick="addToCart(15000)">أضف إلى السلة</button>
                    </div>
                `;
            } else if (category === 'western-food') {
                content = `
                    <h2>طعام غربي</h2>
                    <div class="meal-item">
                        <h3>ستيك اللحم</h3>
                        <p><span>25000 ليرة</span></p>
                        <button onclick="addToCart(25000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>برغر الجبن</h3>
                        <p><span>10000 ليرة</span></p>
                        <button onclick="addToCart(10000)">أضف إلى السلة</button>
                    </div>
                `;
            } else if (category === 'desserts') {
                content = `
                    <h2>حلويات</h2>
                    <div class="meal-item">
                        <h3>تشيز كيك</h3>
                        <p><span>8000 ليرة</span></p>
                        <button onclick="addToCart(8000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>كنافة</h3>
                        <p><span>6000 ليرة</span></p>
                        <button onclick="addToCart(6000)">أضف إلى السلة</button>
                    </div>
                `;
            } else if (category === 'bakery') {
                content = `
                    <h2>معجنات</h2>
                    <div class="meal-item">
                        <h3>سمبوسة</h3>
                        <p><span>5000 ليرة</span></p>
                        <button onclick="addToCart(5000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>فطائر الجبن</h3>
                        <p><span>7000 ليرة</span></p>
                        <button onclick="addToCart(7000)">أضف إلى السلة</button>
                    </div>
                `;
            } else if (category === 'refreshments') {
                content = `
                    <h2>ضيافة</h2>
                    <div class="meal-item">
                        <h3>الشاي الأخضر</h3>
                        <p><span>3000 ليرة</span></p>
                        <button onclick="addToCart(3000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>القهوة العربية</h3>
                        <p><span>4000 ليرة</span></p>
                        <button onclick="addToCart(4000)">أضف إلى السلة</button>
                    </div>
                `;
            } else if (category === 'salty-snacks') {
                content = `
                    <h2>موالح</h2>
                    <div class="meal-item">
                        <h3>المكسرات المحمصة</h3>
                        <p><span>10000 ليرة</span></p>
                        <button onclick="addToCart(10000)">أضف إلى السلة</button>
                    </div>
                    <div class="meal-item">
                        <h3>رقائق البطاطس</h3>
                        <p><span>2000 ليرة</span></p>
                        <button onclick="addToCart(2000)">أضف إلى السلة</button>
                    </div>
                `;
            }
            modalBody.innerHTML = content;
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        function addToCart(price) {
            cartTotal += price;
            cartTotalElement.textContent = cartTotal;
        }

        function openDeliveryModal() {
            deliveryModal.style.display = 'flex';
        }

        function closeDeliveryModal() {
            deliveryModal.style.display = 'none';
        }

        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Radius of the Earth in km
            const dLat = toRadians(lat2 - lat1);
            const dLon = toRadians(lon2 - lon1);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c; // Distance in km
        }

        function toRadians(degrees) {
            return degrees * Math.PI / 180;
        }

        function calculateDelivery() {
            const restaurantCoords = restaurantLocation.value.split(',').map(Number);
            const customerCoords = customerLocation.value.split(',').map(Number);

            if (!restaurantCoords.length || !customerCoords.length) {
                alert('يرجى اختيار مواقع المحل والزبون.');
                return;
            }

            const distance = calculateDistance(
                restaurantCoords[0], restaurantCoords[1],
                customerCoords[0], customerCoords[1]
            );

            // Calculate delivery cost: 8000 + 4000 per km
            let deliveryCost = 8000 + (distance * 4000);

            // Round to the nearest thousand
            deliveryCost = Math.round(deliveryCost / 1000) * 1000;

            // Add delivery cost to total
            const totalWithDelivery = cartTotal + deliveryCost;

            // Update UI
            deliveryCostElement.textContent = deliveryCost;
            totalWithDeliveryElement.textContent = totalWithDelivery;
        }

        // Hide splash screen after animation
        setTimeout(() => {
            document.querySelector('.splash-screen').style.display = 'none';
        }, 2000);
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap"></script>
</body>
</html>
