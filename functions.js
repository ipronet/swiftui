function getAlertGroups()
{
    data = [
        {
          name: 'Credit',
          val: '1'
        },
        {
            name: 'Tarkwa Branch',
            val: '2'
          },
          {
            name: 'Int. Ops',
            val: '3'
          },
          {
            name: 'Relationship Manager',
            val: '4'
          }
        ];
        console.log('executed');
        return data;
}

function getAlertTemplates()
{
    data = [
        {
          name: 'Template-1',
          val: '1',
          prev: "Preview"
        },
        {
            name: 'Template-2',
            val: '2',
            prev: "Preview"
          },
          {
            name: 'Template-3',
            val: '3',
            prev: "Preview"
          }
        ];
        console.log('executed');
        return data;
}


function getMTs()
{
    MTdata = [
        {
          name: 'MT103',
          val: '1'
        },
        {
            name: 'MT199',
            val: '2'
          },
          {
            name: 'MT202',
            val: '3'
          }
        ];
        console.log('executed');
        return MTdata;
}

function getMsgFlow()
{
    data = [
        {
          name: 'Inwards',
          val: '1'
        },
        {
            name: 'Outwards',
            val: '2'
          },
          {
            name: 'Both',
            val: '3'
          }
        ];
        console.log('executed');
        return data;
}


function getAlertTypes()
{
    data = [
        {
          name: 'Email',
          val: '1'
        },
        {
            name: 'SMS',
            val: '2'
          },
          {
            name: 'Both',
            val: '3'
          },
          {
            name: 'None',
            val: '4'
          }
        ];
        console.log('executed');
        return data;
}


function getProfiles()
{
    tableData = [
        {
          AccountName: 'VRA',
          AccountEmail: 'test@vra.com',
          AccountTelephone: '0265429369',
          AccountNumber: '00110123021',
          MessageType: 'MT103',
          MessageDirection: 'Inwards',
          AlertMessageTemplate: 'Template-1',
          AlertInternalGroup: 'Credit',
          AlertType: 'E-Mail',
          MT: 1,
          MsgDir: 1,
          Alert: 3,
          AlertGroup: 1,
          MsgTemp:1
        },
        {
            AccountName: 'GLICO',
            AccountEmail: 'test@glico.com.gh',
            AccountTelephone: '0265429369',
            AccountNumber: '14000039460',
            MessageType: 'MT199',
            MessageDirection: 'Inwards',
            AlertMessageTemplate: 'Template-1',
            AlertInternalGroup: 'Tarkwa Branch',
            AlertType: 'E-Mail',
            MT: 3,
            MsgDir: 3,
            Alert: 1,
            AlertGroup: 2,
            MsgTemp: 1
        },
        {
            AccountName: 'Melcom',
            AccountEmail: 'test@melcom.com',
            AccountTelephone: '0265429369',
            AccountNumber: '00110009891',
            MessageType: 'MT103',
            MessageDirection: 'Inwards',
            AlertMessageTemplate: 'Template-1',
            AlertInternalGroup: 'Tarkwa Branch',
            AlertType: 'E-Mail',
            MT: 2,
            MsgDir: 2,
            Alert: 1,
            AlertGroup: 3,
            MsgTemp: 2
        },
        {
            AccountName: 'Marina Mall',
            AccountEmail: 'test@vra.com',
            AccountTelephone: '0265429369',
            AccountNumber: '00110123021',
            MessageType: 'MT103',
            MessageDirection: 'Inwards',
            AlertMessageTemplate: 'Template-1',
            AlertInternalGroup: 'Credit',
            AlertType: 'E-Mail',
            MT: 1,
            MsgDir: 1,
            Alert: 3,
            AlertGroup: 1,
            MsgTemp:1
          }
    ];

    return tableData;
}

function getnotifications(npath)
{
  //tableData = [{"txtdoc":"00170680.prt","pdfdoc":"","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"BKTRUS33XXX","senderRef":"FT211413027F","BankCode":"CRED","Valdate":"21-May-2021","Currency":"USD","Amount":"9,302.00","OderingCustomer":"1400000251935","OderingCustomerName":"EVIK CONSULTANCY SERVICES LIMITED","BenAccount":"DE31300700100067181800","BenName":"ROTARY FOUNDATION","cdate":"21/05/21","ctime":"18:20:39"},{"txtdoc":"00170681.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"CITIUS33XXX","senderRef":"FT21141H0Y7H","BankCode":"CRED","Valdate":"21-May-2021","Currency":"USD","Amount":"2,778.96","OderingCustomerAcct":"1400001302557","OderingCustomerName":"MSYS GHANA LIMITED","BenAccount":"1300187854502","BenName":"EPSIDON TECHNOLOGY DISTRIBUTION","cdate":"21/05/21","ctime":"18:20:39"},{"txtdoc":"00170682.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"CITIUS33XXX","senderRef":"FT21141K5TYR","BankCode":"CRED","Valdate":"21-May-2021","Currency":"USD","Amount":"3,400.00","OderingCustomerAcct":"1400005268844","OderingCustomerName":"UL ADJEI","BenAccount":"4843144841","BenName":"JOHNSON EMMANUEL","cdate":"21/05/21","ctime":"18:42:34"},{"txtdoc":"00170683.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"CITIUS33XXX","senderRef":"FT21141Y0Y3X","BankCode":"CRED","Valdate":"21-May-2021","Currency":"USD","Amount":"6,900.00","OderingCustomer":"1400001813996","OderingCustomerName":"OI - SAVINGS   LOANS LTD","BenAccount":"NRA15652142010500004691","BenName":"TOAKS INTERNATIONAL TRADING COMPANY","cdate":"21/05/21","ctime":"18:42:34"},{"txtdoc":"00170684.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"DEUTDEFFXXX","senderRef":"FT21141CVWCX","BankCode":"CRED","Valdate":"21-May-2021","Currency":"EUR","Amount":"15,000.00","OderingCustomer":"1400005478598","OderingCustomerName":"DORISSIAH ENTERPRISE","BenAccount":"DE37100500000599010860","BenName":"ALTTEXTILRECYCLING HANEL","cdate":"21/05/21","ctime":"18:42:34"},{"txtdoc":"00170685.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"CITIUS33XXX","senderRef":"FT211412TJ9V","BankCode":"CRED","Valdate":"21-May-2021","Currency":"USD","Amount":"15,000.00","OderingCustomer":"1400000489338","OderingCustomerName":"ALPHA DUO PHARMA LIMITED","BenAccount":"05230310003272","BenName":"BIOCON BIOLOGICS LTD","cdate":"21/05/21","ctime":"18:42:34"},{"txtdoc":"00170686.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"DEUTDEFFXXX","senderRef":"FT21141TXGN0","BankCode":"CRED","Valdate":"21-May-2021","Currency":"EUR","Amount":"15,000.00","OderingCustomer":"1400003259368","OderingCustomerName":"FLOWTECH ENGINEERINGS COMPANY LTD","BenAccount":"IT71C0306937761100000004262","BenName":"BELLI MECCANICA FIRENCE","cdate":"21/05/21","ctime":"18:42:34"},{"txtdoc":"00170687.prt","pdfdoc":"","NetStatus":"Network Ack","mtype":"103","Sender":"ACCCGHACXXX","Reciever":"CITIUS33XXX","senderRef":"FT2114107H7M","BankCode":"CRED","Valdate":"21-May-2021","Currency":"USD","Amount":"50,000.00","OderingCustomer":"1400004338784","OderingCustomerName":"EMMANUEL YAW AJAAB ENTERPRISE","BenAccount":"AE140410000011425303002","BenName":"ATLANTIC EXPORTS LTD","cdate":"21/05/21","ctime":"18:42:34"}]
  let finaldata = [{"dummy":"dummy"}]
  try
  {
    const fsx = require('fs');
    let tableData = fsx.readFileSync(npath)

    finaldata = JSON.parse('['+tableData.toString().substr(1)+']')
  }
  catch { console.log("unknown message type "+ npath) }

  return finaldata;
}

function getMyAcl()
{
  return 2;
}

function getPaths()
{
  return [{
    json: 'C:\\Projects\\handlebars\\swift\\docs\\json\\',
    pdf : 'C:\\Projects\\handlebars\\swift\\docs\\pdf\\',
    txt: 'C:\\Projects\\handlebars\\swift\\docs\\processed\\',
    img: 'C:\\Projects\\handlebars\\swift\\docs\\img\\'
  }]
}

// add the code below
function getAlertGroups(){}




module.exports = { getnotifications, getProfiles, getAlertTypes, getMsgFlow, getMTs, getAlertTemplates, getAlertGroups, getMyAcl, getPaths };



