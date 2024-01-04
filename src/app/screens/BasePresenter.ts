
export interface BasePresenter {
    handleIncrementCount2: () => void;
    handleIncrementCount: () => void;
    handleDecrementCount: () => void;
    handleResetCount: () => void;
    addMagic: () => void;
    addRandom: () => void;
    handleCast: () => void;
    getPageName: () => string;
    goBack: () => void;
    onLoad: () => void;
    data: any;
}