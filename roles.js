const sys_admin = 2;
const sys_audit = 4;
const sys_general = 8;






function checkAccess(sysrole,userrole)  ///   sysrole = 6   userrole = 2   
{
    var acl = eval(sysrole);

    if( (userrole & acl) == userrole )
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = { checkAccess, sys_admin, sys_audit, sys_general }