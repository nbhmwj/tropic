/**
 * Types of tropical fruit
 */
enum TropicalFruit {
    //% block=Banana
    Banana = 0,
    //% block=Pinapple
    Pinapple = 1,
    //% block=Coconut
    Coconut = 2
}
/**
 * Pick some fruit and peel it.
 */
//% weight=70 icon="\uf185" color=#EC7505
namespace tropic {
    /**
     * Pick a fruit
     */
    //% blockId=tropic_pick block="pick a %fruit"
    export function pick(fruit: TropicalFruit): boolean {
        return true;
    }
    /**
     * Peel the fruit if possible
     */
    //% blockId=tropic_peel block="peel a %fruit"
    export function peel(fruit: TropicalFruit): boolean {
        return (fruit == TropicalFruit.Banana);
    }
}