export default {
  namespaced: true,
  state: {
    candidateSelected: [],
    scrutinies: [
      {
        name: "Votação para o Cargo de Presbítero",
        candidates: [
          { id: "1", name: "Cláudio José", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/31265214_1684019681674925_7647981168008101888_n.jpg?_nc_cat=0&_nc_eui2=AeGqxT9SFCAg88mSc9qB-4QnBDnGSwfpEOIRjnahbOV4_zw9TXZ8q3NeyByJpRL3PNcMFKbkVW3x52MCx3X47ic2hgkwcKHPOc_hbr7k8NxoBg&oh=b3aba14c3a984bedd4c158a0b975c059&oe=5C34F215" },
          { id: "2", name: "Jorge Luiz", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/23231441_1817490998549838_8368112227883547788_n.jpg?_nc_cat=0&_nc_eui2=AeEUGqHmvdD3ZygY-3kJdgpzJDe0uG3gfoO1ZMkX3fQF6wrfLpCRXwOKuFQQWX7iQDUdPw0iqCNzL4cb7HEgAYfFZX3d1ncw1gBtsXt3mT0aWQ&oh=7238b90476ac3c604ec301fded833e49&oe=5C2A671D" },
          { id: "3", name: "Rui", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/12509316_936577396390951_2796775431658828287_n.jpg?_nc_cat=0&_nc_eui2=AeFlepLRuMEARmJTGi_tFrgZPjPYRYU8uG0tnZBNNjnKQ2S9wOfmAZ3vGrzrHvKg1X4H6H0q1ko6w6oNIl-GfJ-NbuQmPQdxj2N6KeiAtS55DA&oh=1587bfd7766e3f1b1aedc7192986584c&oe=5BF61DDB" },
          { id: "4", name: "Israel", photo: "http://www.eindhovenstartups.com/wp-content/uploads/2016/08/blank_male_avatar.jpg" }
        ],
        desired_votes: 4,
        max_votes: 2
      },
      {
        name: "Votação para Diaconato",
        candidates: [
          { id: "3", name: "Jonas Maciel", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/10408805_727468863961349_4584213472580045685_n.jpg?_nc_cat=0&_nc_eui2=AeGLfxoLrxu_NpiPiv3dByEXCDRUi03IknyN0t6l8iDNlobDammTuHT1gCTn0_puw2mtRox8A8U5W5FHn11-wuAu4TJdUOPtr2GBSSn7fIR3XQ&oh=9c39df1310bf8cd70a97177d323b8e4f&oe=5C39B36C" },
          { id: "4", name: "Flávio Cesar", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/20431457_1434555289969323_7846788047898088641_n.jpg?_nc_cat=0&_nc_eui2=AeFdI4VTNsurlawRtuRKfJcrqBsfqM5ttHG60YxxSv1k_olY5nD_dpfe09H3tKZCGBACwho3qtDwbV7xdnEEVtpp9sb_xiz3S3CuvZ4LbAhFQA&oh=1bf1db7dd77b9825d139c1db60539daa&oe=5BFC4E5A" },
          { id: "9", name: "Rildo Ramos", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/11260479_470224789825151_2846113100165075218_n.jpg?_nc_cat=0&_nc_eui2=AeEmyMgoA_LCDF2nB3g2bMGGfmDCil1-uxSnbYtGiRvzMCC78F_IPSoQbZJnYx-Wbs7uHLt6nrIaKMDul9J-sKJHM6U0d2quc_gwnaSqqExFqA&oh=8c25e6c5e1985aa844ad98b2ff26e21e&oe=5BFAB128" },
          { id: "5", name: "Diogo Freitas", photo: "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/36895443_10160653693335405_1721810835157811200_n.jpg?_nc_cat=0&_nc_eui2=AeHbTs_InVkMRUnW90W-ICcami-KZTT1tH5TVRoeKHfJlU3GYKntJzrrkIkCWKVLRk_rtSHriczcMKbn9dwpNfNctvIkn-huIbDu_Ztn_AosGA&oh=29c1bce821551bdcd0cea35910a47a04&oe=5C314D38" },

        ],
        desired_votes: 4,
        max_votes: 1
      },
    ]
  },
  getters: {
  },
  actions: {
    selectedCandidate({ state }, candidateId) {

      swal({title: "Atenção", text: `Você só pode votar em ${this.maxVotes}! Clique em OK para continaur`, icon: 'warning', buttons: 'Ok'});
    },
    unselecteCandidate({state}, candidateId) {
    }
  }
}