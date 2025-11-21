import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import useScrollAnimation from '../hooks/useScrollAnimation';
import cutletImage from '../assets/recipe/Cutlet.png';
import momosImage from '../assets/recipe/Momos.png';
import samosaImage from '../assets/recipe/samosa.png';
import rollsImage from '../assets/recipe/Rolls.png';
import './RecipesPage.css';

const RecipeListItem = ({ recipe, index, onRecipeClick }) => {
  const [itemRef, itemVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={itemRef}
      className={`recipe-list-item ${itemVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={() => onRecipeClick(recipe.id)}
    >
      <div className="recipe-list-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-list-content">
        <h3 className="recipe-list-title">{recipe.title}</h3>
        {recipe.tags && (
          <div className="recipe-list-tags">
            {recipe.tags.map((tag, idx) => (
              <span key={idx} className="recipe-list-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="recipe-list-arrow">→</div>
    </div>
  );
};

const RecipeDetail = ({ recipe, index }) => {
  return (
    <div 
      id={`recipe-${recipe.id}`}
      className="recipe-detail"
    >
      <div className="recipe-detail-content">
        <div className="recipe-detail-left">
          <h2 className="recipe-detail-title">{recipe.title}</h2>
          <p className="recipe-detail-description">{recipe.description}</p>
          
          <div className="recipe-detail-image">
            <img src={recipe.image} alt={recipe.title} />
          </div>
          
          <div className="steps-section">
            <h3>തയ്യാറാക്കുന്ന വിധം</h3>
            <ol className="steps-list">
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="recipe-detail-right">
          <div className="ingredients-section">
            <h3>ചേരുവകൾ</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="video-container">
            <iframe
              src={recipe.youtubeVideo}
              title={recipe.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [listRef, listVisible] = useScrollAnimation({ threshold: 0.1 });

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
      youtubeVideo: "https://www.youtube.com/embed/M8OKPq9p9ms"
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

  const scrollToRecipe = (recipeId) => {
    const element = document.getElementById(`recipe-${recipeId}`);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top when component mounts or location changes
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Function to force scroll to top
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    forceScrollToTop();
    
    // Scroll after a short delay to ensure it works after content renders
    const timeoutId1 = setTimeout(forceScrollToTop, 0);
    
    // Additional scroll after content is fully loaded
    const timeoutId2 = setTimeout(forceScrollToTop, 100);
    
    // Scroll after animations might have started
    const timeoutId3 = setTimeout(forceScrollToTop, 300);
    
    // Final scroll check after a longer delay to catch any late scrolls
    const timeoutId4 = setTimeout(() => {
      if (window.pageYOffset > 50) {
        forceScrollToTop();
      }
    }, 800);
    
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(timeoutId4);
    };
  }, [location.pathname]);

  return (
    <div className="recipes-page">
      <Header />
      <section className="recipes-page-section">
        <div className="container">
          <div className="recipes-page-content">
            <button className="back-btn" onClick={() => navigate('/')}>
              ← Back to Home
            </button>
            
            <h2 
              ref={titleRef}
              className={`recipes-page-title fade-in-up ${titleVisible ? 'visible' : ''}`}
            >
              All Mushroom Recipes
            </h2>
            <p 
              className={`recipes-page-subtitle fade-in-up ${titleVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Click on any recipe below to view its details
            </p>
            
            {/* Recipe List */}
            <div 
              ref={listRef}
              className={`recipe-list-container ${listVisible ? 'visible' : ''}`}
            >
              <div className="recipe-list">
                {recipes.map((recipe, index) => (
                  <RecipeListItem 
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                    onRecipeClick={scrollToRecipe}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details-section">
        <div className="container">
          <div className="recipe-details-content">
            <h2 className="recipe-details-title">Recipe Details</h2>
            {recipes.map((recipe, index) => (
              <RecipeDetail 
                key={recipe.id}
                recipe={recipe}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default RecipesPage;

