const ARTIFICIAL_DELAY = 1000 * 0.5;

export const delayFn = async (delay = ARTIFICIAL_DELAY) => {
    const delayPromise = new Promise((r) => setTimeout(r, ARTIFICIAL_DELAY));
    await delayPromise;
};
