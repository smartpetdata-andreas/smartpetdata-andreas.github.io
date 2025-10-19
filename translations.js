// Language translations
const translations = {
    en: {
        // Hero
        heroTitle: "Be the pet parent your vet brags about.",
        heroSubtitle: "Turn every PDF, note, and visit into a single, searchable health record — so you and your vet are always on the same page.",
        ctaButton: "Join the Waitlist",

        // Why Section
        whyTitle: "Why SmartPetData?",

        // Feature 1
        feature1Title: "All Your Pet's Health Records, Unified",
        feature1Text: "No more scattered files or forgotten treatments. SmartPetData intelligently extracts and organizes PDFs, logs, and vet notes into a clean, searchable timeline — or simply ask the AI assistant to find what you need in seconds.",

        // Feature 2
        feature2Title: "Share What Matters, When It Matters",
        feature2Text: "Care is teamwork. Instantly share your pet's up-to-date health info with vets, sitters, or family — securely, with one tap. Everyone stays informed and ready to help when your pet needs it most.",

        // Feature 3
        feature3Title: "Smarter Insights from Your Daily Care",
        feature3Text: "Your notes become meaningful. As you log symptoms, medications, or behaviors, SmartPetData learns from your entries and surfaces personalized AI health insights — spotting patterns you might miss.",

        // Privacy
        privacyNote: "Your data stays private by default and is never shared without your permission.",

        // Final CTA
        ctaHeadline: "Ready to simplify your pet's care?",
        ctaSubheadline: "Join the SmartPetData waitlist and be the first to experience stress-free, organized, intelligent pet health.",
        ctaButtonLarge: "Join the Waitlist →",

        // Footer
        footer: "© 2025 SmartPetData. Made with ❤️ for pet parents. 🐾"
    },
    fr: {
        // Hero
        heroTitle: "Devenez l'humain préféré de votre vétérinaire.",
        heroSubtitle: "Transformez chaque PDF, note et visite en un dossier de santé unique et consultable — pour que vous et votre vétérinaire restiez toujours sur la même longueur d'onde.",
        ctaButton: "Rejoindre la liste d'attente",

        // Why Section
        whyTitle: "Pourquoi SmartPetData?",

        // Feature 1
        feature1Title: "Tous les dossiers de santé de votre animal réunis",
        feature1Text: "Fini les fichiers dispersés ou les traitements oubliés. SmartPetData extrait et organise intelligemment vos PDF, notes et comptes-rendus vétérinaires dans une chronologie claire et consultable — ou demandez simplement à l'assistant IA de retrouver ce qu'il vous faut en quelques secondes.",

        // Feature 2
        feature2Title: "Partagez ce qui compte, quand ça compte",
        feature2Text: "Les soins sont un travail d'équipe. Partagez instantanément les informations de santé à jour de votre animal avec les vétérinaires, gardiens ou membres de votre famille — en toute sécurité, en un clic. Tout le monde reste informé et prêt à intervenir quand votre animal en a le plus besoin.",

        // Feature 3
        feature3Title: "Des analyses plus intelligentes de vos soins quotidiens",
        feature3Text: "Vos notes prennent tout leur sens. Au fur et à mesure que vous enregistrez symptômes, médicaments ou comportements, SmartPetData apprend de vos entrées et génère des analyses de santé personnalisées grâce à l'IA — détectant des tendances que vous auriez peut-être manquées.",

        // Privacy
        privacyNote: "Vos données restent privées par défaut et ne sont jamais partagées sans votre permission.",

        // Final CTA
        ctaHeadline: "Prêt à simplifier les soins de votre animal ?",
        ctaSubheadline: "Rejoignez la liste d'attente SmartPetData et soyez parmi les premiers à découvrir une gestion de la santé animale sans stress — organisée et intelligente.",
        ctaButtonLarge: "Rejoindre la liste d'attente →",

        // Footer
        footer: "© 2025 SmartPetData. Fait avec ❤️ pour les parents d'animaux. 🐾"
    }
};

// Set language
function setLanguage(lang) {
    // Save to localStorage
    localStorage.setItem('smartpetdata-lang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('smartpetdata-lang') || 'en';
    setLanguage(savedLang);
});
