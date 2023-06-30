import * as readline from "readline"
import { merge } from "./merge"
import { bubbleSort } from "./bubble"

function getInput(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

//format and sort input
const changeFormat = (str: string) => {
  const strTrim = str.replace(" ", "")
  if (strTrim === "") return []

  return bubbleSort(strTrim.split(",").map((e) => parseInt(e)))
}

async function main() {
  console.log("input format is: 1,2,3,4")
  console.log("***input only comma and number pls _/|\\_")
  const collection1Str = await getInput("Enter collection1 values: ")
  const collection2Str = await getInput("Enter collection2 values: ")

  console.log(
    "Result is:",
    merge(changeFormat(collection1Str), changeFormat(collection2Str))
  )
}

main()
