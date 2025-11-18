import React, { useState, useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import cutletImage from '../assets/recipe/Cutlet.png';
import momosImage from '../assets/recipe/Momos.png';
import samosaImage from '../assets/recipe/samosa.png';
import rollsImage from '../assets/recipe/Rolls.png';
import './Recipes.css';

const RecipeCard = ({ recipe, index, openRecipeModal }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={cardRef}
      className={`recipe-card ${cardVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        
        {recipe.tags && (
          <div className="recipe-tags">
            {recipe.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        )}
        
        <button 
          className="view-recipe-btn"
          onClick={() => openRecipeModal(recipe)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

const SliderRecipeCard = ({ recipe, cardIndex, openRecipeModal }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  
  return (
    <div 
      ref={cardRef}
      className={`recipe-card ${cardVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${cardIndex * 0.1}s` }}
    >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        
        {recipe.tags && (
          <div className="recipe-tags">
            {recipe.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        )}
        
        <button 
          className="view-recipe-btn"
          onClick={() => openRecipeModal(recipe)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

const Recipes = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [subtitleRef, subtitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  const recipes = [
    {
      id: 1,
      title: "മഷ്റൂം ഫ്രൈ (Mushroom Fry)",
      description: "Traditional Kerala style mushroom fry.",
      image: "https://res.cloudinary.com/do3ps47zs/image/upload/v1760877850/Fry_bkweuf.png",
      ingredients: [
        "മഷ്റൂം – 250 ഗ്രാം",
        "ഉള്ളി – 1 വലുത് (നരിഞ്ഞത്)",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് – 1 ടീസ്പൂൺ",
        "കറിവേപ്പില – കുറച്ച്",
        "മുളകുപൊടി – 1 ടീസ്പൂൺ",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "ധന്യപ്പൊടി – ½ ടീസ്പൂൺ",
        "ഗരം മസാല – ½ ടീസ്പൂൺ",
        "ഉപ്പ്, എണ്ണ"
      ],
      steps: [
        "മഷ്റൂം നന്നായി കഴുകി ചെറിയ കഷ്ണങ്ങളാക്കി വെയ്ക്കുക",
        "ചൂടായ പാനിൽ എണ്ണ ഒഴിച്ച് കറിവേപ്പിലയും ഉള്ളിയും ചേർത്ത് സ്വർണ്ണനിറമാകുന്നത് വരെ വറുക്കുക",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് ചേർത്ത് സുഗന്ധം വരുന്നതുവരെ വറുക്കുക",
        "അതിനു ശേഷം മസാലകൾ ചേർത്ത് അല്പം വെള്ളം തളിച്ച് ഇളക്കുക",
        "മഷ്റൂം ചേർത്ത് മിതമായ തീയിൽ 10 മിനിറ്റ് അടച്ച് വേവിക്കുക",
        "വെള്ളം വറ്റിയാൽ തീ കൂട്ടി നന്നായി വറുത്ത് ഇറക്കി എടുക്കുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/OC9vBqS-6xw"
    },
    {
      id: 2,
      title: "മഷ്റൂം കറി (Mushroom Curry)",
      description: "Rich and flavorful mushroom curry.",
      image: "https://res.cloudinary.com/do3ps47zs/image/upload/v1760877850/cury_bkc7jv.png",
      ingredients: [
        "മഷ്റൂം – 200 ഗ്രാം",
        "ഉള്ളി – 1 എണ്ണം (നരിഞ്ഞത്)",
        "തക്കാളി – 1 എണ്ണം (നരിഞ്ഞത്)",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് – 1 ടീസ്പൂൺ",
        "മുളകുപൊടി – 1 ടീസ്പൂൺ",
        "മല്ലിപ്പൊടി – 1 ടീസ്പൂൺ",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "ഗരം മസാല – ½ ടീസ്പൂൺ",
        "തേങ്ങാപ്പാൽ – ½ കപ്പ്"
      ],
      steps: [
        "മഷ്റൂം കഴുകി അരിഞ്ഞ് വെയ്ക്കുക",
        "പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി വറുത്ത് ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് ചേർക്കുക",
        "തക്കാളി ചേർത്ത് മൃദുവാകുന്നത് വരെ വേവിക്കുക",
        "എല്ലാം മസാലകളും ചേർത്ത് 2 മിനിറ്റ് ഇളക്കുക",
        "മഷ്റൂം ചേർത്ത് അടച്ച് മിതമായ തീയിൽ 10 മിനിറ്റ് വേവിക്കുക",
        "അവസാനം തേങ്ങാപ്പാൽ ചേർത്ത് 2–3 മിനിറ്റ് തിളപ്പിക്കുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/DFnXCfGCDl8"
    },
    {
      id: 3,
      title: "മഷ്റൂം സ്റ്റൂ (Mushroom Stew)",
      description: "Comforting coconut milk stew.",
      image: "https://res.cloudinary.com/do3ps47zs/image/upload/v1760877850/Stew_ngl91p.png",
      tags: ["Traditional", "Coconut"],
      ingredients: [
        "മഷ്റൂം – 200 ഗ്രാം",
        "ഉരുളക്കിഴങ്ങ് – 1 എണ്ണം (ചെറിയ കഷ്ണങ്ങളാക്കി)",
        "ഉള്ളി – 1 എണ്ണം",
        "പച്ചമുളക് – 2 എണ്ണം",
        "ഇഞ്ചി – 1 ടീസ്പൂൺ",
        "തേങ്ങാപ്പാൽ – 1 കപ്പ്",
        "കറിവേപ്പില, ഉപ്പ്, എണ്ണ"
      ],
      steps: [
        "പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി, ഇഞ്ചി, പച്ചമുളക്, കറിവേപ്പില വറുക്കുക",
        "മഷ്റൂം, ഉരുളക്കിഴങ്ങ് ചേർത്ത് കുറച്ച് വെള്ളം ഒഴിച്ച് മിതമായ തീയിൽ വേവിക്കുക",
        "വെള്ളം വറ്റിയ ശേഷം തേങ്ങാപ്പാൽ ചേർത്ത് അല്പം തിളപ്പിക്കുക",
        "ഉപ്പ് ചേർത്ത് ചൂടോടെ വിളമ്പുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/QunFxvL4PBQ"
    },
    
    {
      id: 5,
      title: "മഷ്റൂം ബിരിയാണി (Mushroom Biryani)",
      description: "Aromatic and flavorful biryani.",
      image: "https://res.cloudinary.com/do3ps47zs/image/upload/v1760877850/Biriyani_inkqcu.png",
      tags: ["Biryani", "Festive"],
      ingredients: [
        "ബാസ്മതി അരി – 2 കപ്പ്",
        "മഷ്റൂം – 250 ഗ്രാം",
        "ഉള്ളി – 2 എണ്ണം (വലിയ കഷ്ണങ്ങളാക്കി)",
        "തക്കാളി – 1 എണ്ണം",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് – 1 ടീസ്പൂൺ",
        "ബിരിയാണി മസാല – 1½ ടീസ്പൂൺ",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "ധന്യപ്പൊടി – 1 ടീസ്പൂൺ",
        "ഗരംമസാല – ½ ടീസ്പൂൺ"
      ],
      steps: [
        "അരി കഴുകി അൽപം പാകം ആക്കി വേവിച്ച് വെയ്ക്കുക",
        "മറ്റൊരു പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി വറുത്ത് ബ്രൗൺ ആക്കുക",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ്, തക്കാളി, മസാലകൾ ചേർത്ത് വറുക്കുക",
        "മഷ്റൂം ചേർത്ത് മസാലയിൽ നന്നായി ചേർത്ത് അടച്ച് 10 മിനിറ്റ് വേവിക്കുക",
        "ബിരിയാണി പാത്രത്തിൽ ഒരു പാളി അരി, മഷ്റൂം മസാല, പിന്നെ വീണ്ടും അരി ഇങ്ങനെ പാളികളായി അടുക്കുക",
        "കുറച്ച് നെയ്യ്, കറിവേപ്പില ചേർത്ത് മൂടി കുറച്ച് തീയിൽ 10 മിനിറ്റ് 'ദം' വെക്കുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/ukTFucsVq5E"
    },
    {
      id: 6,
      title: "മഷ്റൂം തോരൻ (Mushroom Thoran)",
      description: "Traditional Kerala side dish.",
      image: "https://res.cloudinary.com/do3ps47zs/image/upload/v1760877850/thoran_lto6ks.png",
      tags: ["Traditional", "Side Dish"],
      ingredients: [
        "മഷ്റൂം – 200 ഗ്രാം",
        "തേങ്ങ – ½ കപ്പ്",
        "പച്ചമുളക് – 2 എണ്ണം",
        "വെളുത്തുള്ളി – 2 പൊത്ത്",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "കറിവേപ്പില, ഉപ്പ്, എണ്ണ"
      ],
      steps: [
        "മഷ്റൂം കഴുകി ചെറുതായി അരിഞ്ഞ് വെയ്ക്കുക",
        "തേങ്ങ, പച്ചമുളക്, വെളുത്തുള്ളി, മഞ്ഞൾപൊടി ഒക്കെ ചേർത്ത് പൊടിച്ച് എടുക്കുക",
        "പാനിൽ എണ്ണ ചൂടാക്കി കറിവേപ്പില ചേർക്കുക",
        "മഷ്റൂം, തേങ്ങ മിശ്രിതം, ഉപ്പ് എന്നിവ ചേർത്ത് മിതമായ തീയിൽ ഇളക്കി വേവിക്കുക",
        "വെള്ളം വറ്റിയാൽ ഇറക്കി എടുക്കുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/IYPuWewIAto"
    },
    {
      id: 7,
      title: "മഷ്റൂം കട്ലറ്റ് (Mushroom Cutlet)",
      description: "Crispy and delicious mushroom cutlets.",
      image: cutletImage,
      tags: ["Snack", "Crispy"],
      ingredients: [
        "മഷ്റൂം – 250 ഗ്രാം",
        "ഉരുളക്കിഴങ്ങ് – 2 എണ്ണം (വേവിച്ചത്)",
        "ഉള്ളി – 1 എണ്ണം (നരിഞ്ഞത്)",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് – 1 ടീസ്പൂൺ",
        "മുളകുപൊടി – 1 ടീസ്പൂൺ",
        "ഗരം മസാല – ½ ടീസ്പൂൺ",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "ബ്രെഡ് ക്രമ്പ് – വേണ്ടത്ര",
        "മുട്ട – 1-2 എണ്ണം",
        "ഉപ്പ്, എണ്ണ"
      ],
      steps: [
        "മഷ്റൂം കഴുകി നന്നായി അരിഞ്ഞ് വെയ്ക്കുക",
        "വേവിച്ച ഉരുളക്കിഴങ്ങ് ചതച്ച് വെയ്ക്കുക",
        "പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി വറുത്ത് ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് ചേർക്കുക",
        "മഷ്റൂം ചേർത്ത് വേവിച്ച് മസാലകൾ ചേർത്ത് നന്നായി ഇളക്കുക",
        "ഉരുളക്കിഴങ്ങും ചേർത്ത് നന്നായി ഇളക്കി കട്ലറ്റ് മിശ്രിതം തയ്യാറാക്കുക",
        "ചെറിയ കട്ലറ്റ് ആകൃതിയിൽ ഉണ്ടാക്കി മുട്ടയിൽ മുക്കി ബ്രെഡ് ക്രമ്പിൽ ഉരുട്ടുക",
        "എണ്ണയിൽ നന്നായി വറുത്ത് ഇറക്കി എടുക്കുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/OC9vBqS-6xw"
    },
    {
      id: 8,
      title: "മഷ്റൂം മോമോസ് (Mushroom Momos)",
      description: "Steamed dumplings with mushroom filling.",
      image: momosImage,
      tags: ["Steamed", "Dumpling"],
      ingredients: [
        "മഷ്റൂം – 200 ഗ്രാം",
        "അല്ലൂ പൊടി – 2 കപ്പ്",
        "ഉള്ളി – 1 എണ്ണം (നരിഞ്ഞത്)",
        "ഇഞ്ചി – 1 ടീസ്പൂൺ (നരിഞ്ഞത്)",
        "വെളുത്തുള്ളി – 2-3 പൊത്ത് (നരിഞ്ഞത്)",
        "പച്ചമുളക് – 1-2 എണ്ണം",
        "സോയ സോസ് – 1 ടീസ്പൂൺ",
        "ഉപ്പ്, കുരുമുളക് പൊടി"
      ],
      steps: [
        "അല്ലൂ പൊടിയിൽ വെള്ളം ചേർത്ത് മൃദുവായ കുഴച്ചുമാറ്റം തയ്യാറാക്കുക",
        "മഷ്റൂം കഴുകി നന്നായി അരിഞ്ഞ് വെയ്ക്കുക",
        "പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി, ഇഞ്ചി, വെളുത്തുള്ളി വറുക്കുക",
        "മഷ്റൂം, പച്ചമുളക്, സോയ സോസ്, ഉപ്പ്, കുരുമുളക് പൊടി എന്നിവ ചേർത്ത് നന്നായി വേവിക്കുക",
        "കുഴച്ചുമാറ്റത്തിൽ നിന്ന് ചെറിയ പാട്ടികൾ എടുത്ത് മഷ്റൂം മിശ്രിതം നിറച്ച് മോമോസ് ആകൃതിയിൽ ഉണ്ടാക്കുക",
        "സ്റ്റീമറിൽ 10-12 മിനിറ്റ് വേവിക്കുക",
        "ചൂടോടെ സോസുമായി വിളമ്പുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/WpZ3ym4M--Q"
    },
    {
      id: 9,
      title: "മഷ്റൂം സമോസ (Mushroom Samosa)",
      description: "Crispy samosas with mushroom filling.",
      image: samosaImage,
      tags: ["Snack", "Fried"],
      ingredients: [
        "മഷ്റൂം – 200 ഗ്രാം",
        "മൈദ – 2 കപ്പ്",
        "ഉള്ളി – 1 എണ്ണം (നരിഞ്ഞത്)",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് – 1 ടീസ്പൂൺ",
        "മുളകുപൊടി – 1 ടീസ്പൂൺ",
        "ഗരം മസാല – ½ ടീസ്പൂൺ",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "ധന്യപ്പൊടി – ½ ടീസ്പൂൺ",
        "ഉപ്പ്, എണ്ണ"
      ],
      steps: [
        "മൈദയിൽ എണ്ണ, ഉപ്പ്, വെള്ളം ചേർത്ത് മൃദുവായ കുഴച്ചുമാറ്റം തയ്യാറാക്കുക",
        "മഷ്റൂം കഴുകി നന്നായി അരിഞ്ഞ് വെയ്ക്കുക",
        "പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി വറുത്ത് ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് ചേർക്കുക",
        "മഷ്റൂം ചേർത്ത് വേവിച്ച് മസാലകൾ ചേർത്ത് നന്നായി വറുത്ത് ഇറക്കി എടുക്കുക",
        "കുഴച്ചുമാറ്റത്തിൽ നിന്ന് ചെറിയ പാട്ടികൾ എടുത്ത് മഷ്റൂം മിശ്രിതം നിറച്ച് സമോസ ആകൃതിയിൽ ഉണ്ടാക്കുക",
        "എണ്ണയിൽ നന്നായി വറുത്ത് സ്വർണ്ണനിറമാകുന്നത് വരെ വേവിക്കുക",
        "ചൂടോടെ ചട്നിയുമായി വിളമ്പുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/_sIzNPIYOFM"
    },
    {
      id: 10,
      title: "മഷ്റൂം റോള്സ് (Mushroom Rolls)",
      description: "Delicious mushroom rolls with crispy outer layer.",
      image: rollsImage,
      tags: ["Snack", "Roll"],
      ingredients: [
        "മഷ്റൂം – 200 ഗ്രാം",
        "പറോട്ട – 8-10 എണ്ണം",
        "ഉള്ളി – 1 എണ്ണം (നരിഞ്ഞത്)",
        "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് – 1 ടീസ്പൂൺ",
        "മുളകുപൊടി – 1 ടീസ്പൂൺ",
        "ഗരം മസാല – ½ ടീസ്പൂൺ",
        "മഞ്ഞൾപൊടി – ¼ ടീസ്പൂൺ",
        "ധന്യപ്പൊടി – ½ ടീസ്പൂൺ",
        "മുട്ട – 1-2 എണ്ണം",
        "ബ്രെഡ് ക്രമ്പ് – വേണ്ടത്ര",
        "ഉപ്പ്, എണ്ണ"
      ],
      steps: [
        "മഷ്റൂം കഴുകി നന്നായി അരിഞ്ഞ് വെയ്ക്കുക",
        "പാനിൽ എണ്ണ ചൂടാക്കി ഉള്ളി വറുത്ത് ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ് ചേർക്കുക",
        "മഷ്റൂം ചേർത്ത് വേവിച്ച് മസാലകൾ ചേർത്ത് നന്നായി വറുത്ത് ഇറക്കി എടുക്കുക",
        "പോറോട്ടയിൽ മഷ്റൂം മിശ്രിതം നിറച്ച് റോൾ ആകൃതിയിൽ ഉണ്ടാക്കുക",
        "മുട്ടയിൽ മുക്കി ബ്രെഡ് ക്രമ്പിൽ ഉരുട്ടുക",
        "എണ്ണയിൽ നന്നായി വറുത്ത് സ്വർണ്ണനിറമാകുന്നത് വരെ വേവിക്കുക",
        "ചൂടോടെ കെച്ചപ്പ് സോസുമായി വിളമ്പുക"
      ],
      youtubeVideo: "https://www.youtube.com/embed/YztBIZogXIU"
    }
  ];

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleShowAllRecipes = () => {
    setShowAllRecipes(!showAllRecipes);
  };

  // Get recipes to display based on mobile view and showAllRecipes state
  const getDisplayRecipes = () => {
    if (isMobile && !showAllRecipes) {
      return recipes.slice(0, 3);
    }
    return recipes;
  };

  const nextSlide = () => {
    const maxSlides = Math.ceil(recipes.length / 3) - 1;
    setCurrentSlide((prev) => (prev + 1) % (maxSlides + 1));
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(recipes.length / 3) - 1;
    setCurrentSlide((prev) => (prev - 1 + (maxSlides + 1)) % (maxSlides + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlides = Math.ceil(recipes.length / 3) - 1;

  return (
    <section id="recipes" className="recipes">
      <div className="container">
        <div className="recipes-content">
          <h2 
            ref={titleRef}
            className={`recipes-title fade-in-up ${titleVisible ? 'visible' : ''}`}
          >
            Mushroom Recipes
          </h2>
          <p 
            ref={subtitleRef}
            className={`section-subtitle fade-in-up ${subtitleVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Discover delicious mushroom recipes to make the most of your fresh produce
          </p>
          
          {/* Desktop Slider View */}
          {!isMobile && (
            <>
              <div className="recipes-slider-container">
                <button className="slider-btn prev-btn" onClick={prevSlide}>
                  ‹
                </button>
                
                <div className="recipes-slider" ref={sliderRef}>
                  <div 
                    className="recipes-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: maxSlides + 1 }, (_, slideIndex) => (
                      <div key={slideIndex} className="slide-group">
                        {recipes.slice(slideIndex * 3, (slideIndex + 1) * 3).map((recipe, cardIndex) => (
                          <SliderRecipeCard 
                            key={recipe.id}
                            recipe={recipe}
                            cardIndex={cardIndex}
                            openRecipeModal={openRecipeModal}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="slider-btn next-btn" onClick={nextSlide}>
                  ›
                </button>
              </div>
              
              <div className="slider-dots">
                {Array.from({ length: maxSlides + 1 }, (_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </>
          )}

          {/* Mobile Vertical View */}
          {isMobile && (
            <div className="mobile-recipes-container">
              <div className="mobile-recipes-grid">
                {getDisplayRecipes().map((recipe, index) => (
                  <RecipeCard 
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                    openRecipeModal={openRecipeModal}
                  />
                ))}
              </div>
              
              {!showAllRecipes && recipes.length > 3 && (
                <button className="see-more-btn" onClick={toggleShowAllRecipes}>
                  See More Recipes
                </button>
              )}
              
              {showAllRecipes && (
                <button className="see-more-btn" onClick={toggleShowAllRecipes}>
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="recipe-modal-overlay" onClick={closeRecipeModal}>
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeRecipeModal}>×</button>
            
            <div className="modal-content">
              <div className="modal-left">
                <h2 className="modal-title">{selectedRecipe.title}</h2>
                
                <div className="ingredients-section">
                  <h3>ചേരുവകൾ</h3>
                  <ul className="ingredients-list">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="steps-section">
                  <h3>തയ്യാറാക്കുന്ന വിധം</h3>
                  <ol className="steps-list">
                    {selectedRecipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="modal-right">
                <div className="video-container">
                  <iframe
                    src={selectedRecipe.youtubeVideo}
                    title={selectedRecipe.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Recipes;
