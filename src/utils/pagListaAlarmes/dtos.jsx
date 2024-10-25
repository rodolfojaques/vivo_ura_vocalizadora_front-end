export async function DtoSG(data) { 
    const transfer = []

    if(data.length === 0) return transfer

    await data.forEach(async(el) => {
        const {
            DATA_APRESENTACAO,
            TA,
            TIPO_TA,
            TIPO_REDE,
            ESTADO,
            LOCALIDADE,
            SITE,
            TIPO_ALARME,
            CLASSIFICACAO,
            ID_EVENTO,
            ID_EQUIPAMENTO,
            RPA_STATUS,
            SIGITM_FLUXO,
            TIPO_BILHETE,
            TIPO_REDE_COD,
            TIPO_REDE_COD_INT,
            LOCALIDADE_COD,
            MUNICIPIO,
            ID_SITE,
            SEQUENCIA_ALARME,
            EMPRESA_MANUTENCAO,
            ALARME,
            TIPO_FALHA,
            TIPO_AFETACAO,
            EQUIPAMENTO,
            TIPO_CORRENTE_ELETRICA,
            CAPACIDADE,
            FABRICANTE,
            MODELO,
            SALAS_AFETADAS,
            HISTORICO,
            HISTORICO_TIPO,
            TIPO_PLANTA,
            TIPO_PLANTA_COD,
            ELEMENTO_SIGLA,
        } = await el

        transfer.push({
            DATA_APRESENTACAO,
            TA,
            TIPO_TA,
            TIPO_REDE,
            ESTADO,
            LOCALIDADE,
            SITE,
            TIPO_ALARME,
            CLASSIFICACAO,
            ID_EVENTO,
            ID_EQUIPAMENTO,
            RPA_STATUS,
            SIGITM_FLUXO,
            TIPO_BILHETE,
            TIPO_REDE_COD,
            TIPO_REDE_COD_INT,
            LOCALIDADE_COD,
            MUNICIPIO,
            ID_SITE,
            SEQUENCIA_ALARME,
            EMPRESA_MANUTENCAO,
            ALARME,
            TIPO_FALHA,
            TIPO_AFETACAO,
            EQUIPAMENTO,
            TIPO_CORRENTE_ELETRICA,
            CAPACIDADE,
            FABRICANTE,
            MODELO,
            SALAS_AFETADAS,
            HISTORICO,
            HISTORICO_TIPO,
            TIPO_PLANTA,
            TIPO_PLANTA_COD,
            ELEMENTO_SIGLA,
          })
    });

  return transfer
}

export async function DtoDL(data) { 
  const transfer = []

  if(data.length === 0) return transfer

  await data.forEach(async(el) => {
      const {
        firstSeen,
        persistent_frontTypeTa,
        persistent_tipoTa,
        persistent_tipoTA,
        persistent_frontNetworkType,
        persistent_tipoRede,
        persistent_estadoSigla,
        persistent_localidadeSigla,
        persistent_frontAlarmId,
        persistent_frontTypeFailure,
        persistent_tipoFalha,
        persistent_frontPlantType,
        persistent_tipoPlanta,
        persistent_classificacao,
        severity,
        persistent_frontSpecificProblem,
        persistent_specificProblem,
        persistent_tipoAlarme,
        persistent_tipoDeAlarme,
        persistent_frontDomain,
        persistent_familia,
        persistent_frontProblemCause,
        manager,
        node,
        persistent_frontVendor,
        matchedCounter,
        identifier,
        description,
        lastSeen,
        type,
        persistent_ta
      } = await el

      transfer.push({
        firstSeen: firstSeen,
        frontTypeTa: persistent_frontTypeTa,
        tipoTa: persistent_tipoTa,
        tipoTA: persistent_tipoTA,
        frontNetworkType: persistent_frontNetworkType,
        tipoRede: persistent_tipoRede,
        estadoSigla: persistent_estadoSigla,
        localidadeSigla: persistent_localidadeSigla,
        frontAlarmId: persistent_frontAlarmId,
        frontTypeFailure: persistent_frontTypeFailure,
        tipoFalha: persistent_tipoFalha,
        frontPlantType: persistent_frontPlantType,
        tipoPlanta: persistent_tipoPlanta,
        classificacao: persistent_classificacao,
        severity: severity,
        frontSpecificProblem: persistent_frontSpecificProblem,
        specificProblem: persistent_specificProblem,
        tipoAlarme: persistent_tipoAlarme,
        tipoDeAlarme: persistent_tipoDeAlarme,
        frontDomain: persistent_frontDomain,
        familia: persistent_familia,
        frontProblemCause: persistent_frontProblemCause,
        manager: manager,
        node: node,
        frontVendor: persistent_frontVendor,
        matchedCounter: matchedCounter,
        identifier: identifier,
        description: description,
        lastSeen: lastSeen,
        type: type,
        ta: persistent_ta
      })
  });

return transfer
}