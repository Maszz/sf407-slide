<v-click depth="2">
<h1>{{ data.title }}</h1>
</v-click>

<v-click>
<ul>
 <li v-for="(value, key) in data.items" :key="key">
    <span class="color-[#4EC5D4] text-base">{{ key }}</span> - <span class="color-[#c0c0c0] text-base">{{ value }}</span>
  </li>
</ul>
</v-click>

<script setup lang="ts">
const data = {
  title: 'Multiverse Expert Co, Ltd --',
  items: {
    "Blockchain Solutions": "Consultation, design, and development of Blockchain solutions including Tokenomics and Mainnet deployment, plus Web and Mobile App development.",
    "Blockchain Consulting": "Expert Blockchain system design and consultation for internal and external organizational use.",
    "Private Blockchain Development": "Development and management of Private Blockchain systems using technologies like Corda r3, Hyperledger, Stellar, and EVM.",
    "Smart Contract Development": "Design and development of Smart Contracts for sectors such as Banking, NFT, and Marketplace.",
    "Blockchain Integrations": "Integrates Blockchain technology with existing systems to enhance business value.",
    "Web and Mobile Application Dev": "Custom web and mobile app development to meet organizational needs.",
}
}
</script>
<style>

h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

</style>

<!--
Here is another comment.
-->
