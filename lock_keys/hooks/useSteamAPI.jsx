// Chave API: 519E93F643C5A0D77BD23D6BA308CF4F
import axios from 'axios' 


export default async function useSteamApi(id) {

  try {
    const res = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${id}`);
    const info = res.data

    if(info[id] && info[id].success){
      const imagem = info[id].data
      return imagem
    }
  }

    catch (error) {
      console.error('Erro ao buscar imagem na API: ', error)
    }
}