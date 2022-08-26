<template>
  <div v-if="userList === null" class="loader">
        <img width="70" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" />
        <h4>데이터를 불러오는 중입니다.</h4>
    </div>

    <div v-else-if="userList.length < 1" class="loader">
        <h4>
            <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
            유저가 발견되지 않았습니다.
        </h4>
    </div>

    <div v-else>
        <ul>
            <li v-for="(user,idx) in userList" :key="idx">
                <router-link :to="{ name: 'data', params: { userId : user.id } }"><li><h4>{{ user.name }}</h4></li></router-link>
            </li>
        </ul>
    </div>
    <button @click="fetchData()">새로고침</button>
</template>

<script>
export default {
    data() {
        return {
            userList : null
        }
    },
    methods: {
        fetchData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function(response) {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userList = [];
                }else{
                    self.userList = response.data;
                }
            })
        }
    },
    mounted() {
        this.fetchData();
    },
}
</script>

<style>
.loader{
    text-align:center;
    padding:40px 0;
    border:1px solid #eee;
    border-radius:10px;
    margin:40px;
}
</style>