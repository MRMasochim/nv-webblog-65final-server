import Api from '@/services/Api'

export default {
    index() {
        return Api().get('cameras')
    },
    show(cameraId){
        return Api().get('camera/'+cameraId)
    },
    post(camera){
        return Api().post('camera', camera)
    },
    put(camera){
        return Api().put('camera/'+camera.id, camera)
    },
    delete(camera){
        return Api().delete('camera/'+camera.id, camera)
    },
}