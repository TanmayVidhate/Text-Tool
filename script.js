const input = document.getElementById("input")
const output = document.getElementById("output")

function Upper()
{
    const text = input.value
    const res = output
    res.innerText = text.toUpperCase()
}

function Lower()
{
    const text = input.value
    const res = output
    res.innerText = text.toLowerCase()
}