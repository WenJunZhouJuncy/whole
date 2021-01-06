import axios from './config'
// import store from '../store'

const common = {
  baseURL: 'http://127.0.0.1:3001',//process.env.VUE_APP_PORTALAPI, //'https://nfys-test.kinglian.cn',
  // baseURL: 'https://nfys.kinglian.cn',//process.env.VUE_APP_PORTALAPI, //'https://nfys.kinglian.cn',
	header:{
    
	},
	body:{
    
	}
}

export const register = (data = {}) => {
	return axios({
		url: common.baseURL + '/admin/register',
		method: 'post',
		data,
	})
}

//我的问诊列表/ehealth.portalapi/api/DrugStore/GetSouthVisitList
// export function getSouthVisitList(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.portalapi/api/DrugStore/GetSouthVisitList',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export function getMedOvVisitQues(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.PortalApi/api/DrugStore/GetMedOvVisitQues',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export function getVisitOrderState(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.portalapi/api/Visit/GetVisitOrderState',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export function UpdateVisitState(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.PortalApi/api/DrugStore/UpdateVisitState',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export function saveMedOffQuesLog(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.PortalApi/api/DrugStore/saveMedOffQuesLog',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export function applyMoreTime(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.PortalApi/api/DrugStore/GetMedOvVisitQues',
// 		method: 'post',
// 		data: parameter
// 	})
// }
// export function getVisitPatient(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.portalApi/api/Visit/GetVisitPatientDetail',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export function getPresStateByOrderId(parameter) {
// 	let parameters = {};
// 	parameters.header=Object.assign({},publicParameters.header,parameter.header)
// 	parameters.body=Object.assign({},publicParameters.body,parameter.body)
// 	parameters = Object.assign(parameters, publicParameters, parameter);
// 	return axios({
// 		url: api.PORTALAPI + '/ehealth.rest/HealthRestV2.aspx/GetPresStateByOrderId',
// 		method: 'post',
// 		data: parameter
// 	})
// }

// export var chatImgUpload = function(params) {
//     var PortalId = store.state.userInfo.PortalId;
//     var url =  api.PORTALAPI + '/eHealth.rest/FileUploadApi.ashx?PortalId=' + PortalId + '&ClinicId=90000&FileType=8'
// 	//return http.post(url, params, { headers: { "Content-Type":'multipart/form-data','processData':false } })

// 	return axios({
// 		url: url,
// 		method: 'post',
// 		data: params,
// 		headers: { "Content-Type":'multipart/form-data','processData':false }
// 	})
// }