import Title from "./title.js";

export default function Page() {
    let a =10;
    let b =2;
    return(
        <main>
            <Title />
            <p>This is the second page</p>
            <p>
                The sum of {a} and {b} is {a+b}
            </p>
        </main>
    );
}