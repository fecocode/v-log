
    <template>
    <div>
        <div class="autor">
        <div class="imagen">
            <img width="40" height="40" src="https://firebasestorage.googleapis.com/v0/b/v-log-d4c0e.appspot.com/o/avatar_1.jpeg?alt=media&token=886d56d9-123c-46ff-be91-fe77251ba613">
        </div> 
        <div class="nombre">
            <h5>Nombre del Autor</h5>
            <h6>@nombreAutor</h6>
        </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: "Autor"
    };
    </script>

    <style scoped>

    .autor {
    background-color: #F8F9F9;
    margin:0px auto;
    display: flex;
    align-items: center;

    }
    .imagen {
    margin:10px;
    }

    img {
        border-radius: 50%    
    }

    h5{
    margin: 0 auto;
    }

    h6 {
    font-weight: 500;
    margin: 0 auto;
    }

    @media screen and (max-width: 400px) {
        .autor {
            background-color: #F8F9F9;
            margin: 0px auto;
            display: flex;
            align-items: center;

        }
        .imagen {
            margin:10px;
        }

        img {
            border-radius: 50%    
        }

        h5{
            margin: 0 auto;
        }

        h6 {
            font-weight: 500;
            margin: 0 auto;
        }
    }



</style>