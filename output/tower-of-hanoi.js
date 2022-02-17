function hanoi(plate, a, b, c) {
    if (plate === 1) {
        console.log("\u5C06\u76D8\u5B50\u4ECE" + a + "  -->  " + c + "\n");
    }
    else {
        hanoi(plate - 1, a, c, b);
        console.log("\u5C06\u76D8\u5B50\u4ECE" + a + "  --> \u79FB\u52A8\u5230" + c + "\n");
        hanoi(plate - 1, b, a, c);
    }
}
hanoi(5, 'A', 'B', 'C');
//# sourceMappingURL=tower-of-hanoi.js.map