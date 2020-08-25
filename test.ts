import { fail, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Truffle } from "./truffle.ts";


Deno.test("compile contract", async (): Promise<void> => {

    try {
        Truffle.compileContract()
        fail('An error was expected as implementation has not begun yet.')
    } catch(error){
        assertEquals('Method needs to be implemented', error.message)
    }

});


Deno.test("migrate contract", async (): Promise<void> => {

    try {
        Truffle.migrateContract()
        fail('An error was expected as implementation has not begun yet.')
    } catch(error){
        assertEquals('Method needs to be implemented', error.message)
    }
    
});

Deno.test("test contract", async (): Promise<void> => {

    try {
        Truffle.testContract()
        fail('An error was expected as implementation has not begun yet.')
    } catch(error){
        assertEquals('Method needs to be implemented', error.message)
    }
    
});