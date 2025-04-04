import axiosInstance from "./axiosInstance"


export const getAllTowerApi = async (): Promise<any> => {
    try {
        const response = await axiosInstance.get(`/tower/all`)
        return response
    } catch (error) {
        throw error
    }
}
export const addTowerApi = async (data: any): Promise<any> => {
    try {
        const response = await axiosInstance.post(`/tower/new`, data)
        return response
    } catch (error) {
        throw error
    }
}
export const updateTowerApi = async (data: any, id: any): Promise<any> => {
    try {
        const dataToUpdate = {
            towerName: data.towerName,
            societyIdentifier: data.societyIdentifier
        }
        const response = await axiosInstance.patch(`/tower/${id}`, dataToUpdate)
        return response
    } catch (error) {
        throw error
    }
}
export const deleteTowerApi = async (identifier: string): Promise<any> => {
    try {
        const response = await axiosInstance.delete(`/tower/${identifier}`)
        return response
    } catch (error) {
        throw error
    }
}
