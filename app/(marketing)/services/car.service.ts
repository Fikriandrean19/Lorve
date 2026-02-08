import httpService from '../../../client'

const resourcePath = `${process.env.NEXT_PUBLIC_API_URL}`

export const getCars = () => {
    return httpService.get(resourcePath + '/cars')
}

export const getCarDetail = (id: any) => {
    return httpService.get(resourcePath + `/car/${id}`)
}
