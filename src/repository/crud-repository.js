class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        console.log(data);
        console.log(" this.model",this.model);
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.error("Something went wrong in the CRUD repository create()", error);
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
            
        } catch (error) {
            console.error("Something went wrong in the CRUD repository destroy()", error);
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.error("Something went wrong in the CRUD repository get()", error);
            throw error;
        }
    }

    async getAll(id){
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.error("Something went wrong in the CRUD repository getAll()", error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const result = await this.model.findById(id,data,{new:true});
            return result;
        } catch (error) {
            console.error("Something went wrong in the CRUD repository update()", error);
            throw error;
        }
    }

}

export default CrudRepository;
