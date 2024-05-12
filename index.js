const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init=0

const botSay = (data) => {
  return [
  "hallo nama saya EsyehaBOT nama kamu siapa?",
  `ohh ${data?.Nama}, btw usia kamu berapa?`,
  `serius ${data?.Usia}, sama dong kamu cewek/cowok?`,
  `${data?.Gender} ya, hobi kamu apa?`,
  `wow ${data?.Hobi} keren, btw udah punya pacar belum?`,
  `hmm ${data?.Status} ya, ywdh sih wir`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart(){
  if(jawaban.value.length < 1) return alert(`jawaban mu kosong dongo`)
  init++
  if(init === 1) {
  botDelay({ Nama: jawaban.value })
  }else if (init=== 2) {
  botDelay({ Usia: jawaban.value })
  }else if (init=== 3) {
  botDelay({ Gender: jawaban.value })
  }else if (init=== 4) {
  botDelay({ Hobi: jawaban.value })
  }else if (init=== 5) {
  botDelay({ Status: jawaban.value })
  jawaban.value = "ok wir"
  }else if (init=== 6) {
    finishing()
  }else {
    botEnd()
  }
}  

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [800])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Thank you ya ${usersData[0]} lain kali kita bisa ${usersData[3]} bareng.`
  jawaban.value = ""
}

function botEnd() {
  alert(`thnk sudah main ${usersData[0]} lu bakal diarahin ke awal lagi`)
  window.location.reload()
  
}

const inputField = document.getElementById('jawaban');

inputField.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    // Enter key pressed
    // Call your function here
    botStart();
  }
});

// function myFunction() {
//   // Your code here
//   console.log('Enter key pressed');
// }