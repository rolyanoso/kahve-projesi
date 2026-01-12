
import { createContext } from "react";
import { useState , useEffect} from "react";
export const ProductsList = createContext();

const allProducts = {
    hotBrews : [
            { id: "hot-espresso", name: "Espresso", price: 3.00 ,url:"/images/drinksMenu/espresso-kahve.jpg"},
            { id: "hot-americano", name: "Americano", price: 3.50,url:"/images/drinksMenu/americano.jpg" },
            { id: "hot-cappuccino", name: "Cappuccino", price: 4.00,url:"/images/drinksMenu/cappuccino.jpeg" },
            { id: "hot-latte", name: "Latte", price: 4.50 ,url:"/images/drinksMenu/latte.jpeg"},
            { id: "hot-mocha", name: "Mocha", price: 4.80 ,url:"/images/drinksMenu/mocha.jpg"},
            { id: "hot-flat-white", name: "Flat White", price: 4.60 ,url:"/images/drinksMenu/flat_white.jpeg"},
    ],

    coldCoffee : [
            { id: "cold-iced-americano", name: "Iced Americano", price: 3.80,url:"/images/drinksMenu/Iced_Americano.jpg" },
            { id: "cold-iced-latte", name: "Iced Latte", price: 4.50,url:"/images/drinksMenu/Iced_Latte.jpg" },
            { id: "cold-cold-brew", name: "Cold Brew", price: 4.70 ,url:"/images/drinksMenu/cold-brew.jpg"},
            { id: "cold-iced-mocha", name: "Iced Mocha", price: 4.90 ,url:"/images/drinksMenu/Iced_Mocha.jpg"},
            { id: "cold-caramel-iced", name: "Caramel Iced Coffee", price: 5.00,url:"/images/drinksMenu/Caramel_Iced.jpg" },
    ],

    teaAndOther : [
            { id: "tea-black", name: "Black Tea", price: 2.50,url:"/images/drinksMenu/black-tea.jpg" },
            { id: "tea-green", name: "Green Tea", price: 2.80 ,url:"/images/drinksMenu/green_tea.jpeg"},
            { id: "tea-herbal", name: "Herbal Tea", price: 3.00,url:"/images/drinksMenu/herbs-tea.jpg" },
            { id: "tea-matcha-latte", name: "Matcha Latte", price: 4.80,url:"/images/drinksMenu/Matcha-Latte.jpg" },
            { id: "tea-chai-latte", name: "Chai Latte", price: 4.60 ,url:"/images/drinksMenu/chai_latte.jpg"},
            { id: "tea-hot-chocolate", name: "Hot Chocolate", price: 4.20,url:"/images/drinksMenu/hot_chocolate.jpg" },
    ],

    specialFlavors : [
            { id: "special-vanilla-orange", name: "Vanilla Orange Latte", price: 5.50,url:"/images/drinksMenu/Vanilla-Orange-Latte.jpg" },
            { id: "special-cinnamon-honey", name: "Cinnamon Honey Cappuccino", price: 5.40,url:"/images/drinksMenu/Cinnamon-Honey-Cappuccino.jpg" },
            { id: "special-caramel-sea-salt", name: "Caramel Sea Salt Latte", price: 5.80 ,url:"/images/drinksMenu/Caramel-Salt-Latte.jpg"},
            { id: "special-cold-brew-tonic", name: "Cold Brew Tonic", price: 5.60 ,url:"/images/drinksMenu/cold_brew_tonic.jpg"},
            { id: "special-affogato", name: "Affogato", price: 5.20,url:"/images/drinksMenu/Affogato.jpg" },
    ],

    desserts : [
            { id: "dessert-cheesecake", name: "Cheesecake", price: 5.20,url:"/images/desserts/cheesecake.jpg" },
            { id: "dessert-brownie", name: "Chocolate Brownie", price: 4.80,url:"/images/desserts/Chocolate-Brownie.jpg" },
            { id: "dessert-tiramisu", name: "Tiramisu", price: 5.50 ,url:"/images/desserts/Tiramisu.jpeg"},
            { id: "dessert-croissant", name: "Butter Croissant", price: 3.90,url:"/images/desserts/Butter-Croissant.jpeg" },
            { id: "dessert-macaron", name: "Macaron (3 pcs)", price: 4.20 ,url:"/images/desserts/Macaron.jpeg"},
            { id: "dessert-cinnamon-roll", name: "Cinnamon Roll", price: 4.60 ,url:"/images/desserts/Cinnamon-Roll.jpg"},
    ],

    shop : [
            { id: "shop-beans-250g", name: "Coffee Beans (250g)", price: 12.00,url:"/images/shop/boschendal.jpg" },
            { id: "shop-ground-250g", name: "Ground Coffee (250g)", price: 11.00 ,url:"/images/shop/Ground-Coffee.jpg"},
            { id: "shop-mug", name: "Coffee Mug", price: 8.50,url:"/images/shop/Coffee-Mug.jpg" },
            { id: "shop-tumbler", name: "Travel Tumbler", price: 14.00,url:"/images/shop/Travel-Tumbler.jpg" },
            { id: "shop-french-press", name: "French Press", price: 22.00 ,url:"/images/shop/French-Press.jpg"},
    ],
};


export const ProductProvider = ({ children }) => {
        const [basket , setBasket] = useState([]);
        console.log("BASKET:", basket);

        const addToBasket = (product) => {
                setBasket(prev => {
                        const existing = prev.find(p => p.id === product.id);
                        
                        if(existing) {
                            return prev.map(p => 
                                p.id === product.id
                                ? {...p, quantity: p.quantity+1}
                                : p
                            );
                        }
                        return [...prev,{...product,quantity:1}];
                });     
        };
        const decreaseFromBasket = (id) => {
                setBasket(prev => 
                        prev
                        .map(p =>
                                p.id === id 
                                ? {...p, quantity: p.quantity - 1}
                                : p
                        )
                        .filter(p => p.quantity > 0)
                );
        }
        const [initialized, setInitialized] = useState(false);

        useEffect(() => {
        const savedBasket = JSON.parse(localStorage.getItem("saveBasket"));
        if (savedBasket) {
        setBasket(savedBasket);
        }
        setInitialized(true);
        }, []);

        useEffect(() => {
        if (initialized) {
        localStorage.setItem("saveBasket", JSON.stringify(basket));
        }
        }, [basket, initialized]);

        const totalPrice = basket.reduce((sum,item) => sum + item.price * item.quantity , 0);
        const value = {
                allProducts,
                totalPrice,
                basket,
                addToBasket,
                setBasket,
                decreaseFromBasket,
        };
    return (
        <ProductsList.Provider value={value}>
            {children}
        </ProductsList.Provider>
    )
}