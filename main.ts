/**
 * Test extension for checking offline build
 */

//% weight=100 color=#aef354 icon="\uf0c2" block="Test 1"
namespace test_numero_uno {
    /** 
     * Test function to display some text.
     */
    //% weight=100 blockGap=8
    //% blockId="test_numero_uno_show_text_ts" block="display some text with ts"
    export function showText_ts(): void {
        basic.showString("Hello from TS!")
    }
}
