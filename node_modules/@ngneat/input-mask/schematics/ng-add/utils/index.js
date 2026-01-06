"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspace = exports.getWorkspacePath = exports.getSourceFile = exports.addModuleImportToModule = exports.addModuleImportToRootModule = exports.addPackageToPackageJson = exports.getProjectTargetOptions = exports.getProjectFromWorkspace = exports.installPackageJsonDependencies = void 0;
const ts = require("typescript");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const project_main_file_1 = require("./project-main-file");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const schematics_1 = require("@angular-devkit/schematics");
const jsonc_parser_1 = require("jsonc-parser");
const installPackageJsonDependencies = () => (host, context) => {
    context.addTask(new tasks_1.NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);
    return host;
};
exports.installPackageJsonDependencies = installPackageJsonDependencies;
const getProjectFromWorkspace = (workspace, projectName) => {
    const finalProjectName = projectName || workspace.defaultProject;
    if (finalProjectName) {
        const project = workspace.projects[finalProjectName];
        return project;
    }
    else {
        throw new Error(`Could not find project in workspace: ${projectName}`);
    }
};
exports.getProjectFromWorkspace = getProjectFromWorkspace;
const getProjectTargetOptions = (project, buildTarget) => {
    const targetConfig = (project.architect && project.architect[buildTarget]) ||
        (project.targets && project.targets[buildTarget]);
    if (targetConfig && targetConfig.options) {
        return targetConfig.options;
    }
    throw new Error(`Cannot determine project target configuration for: ${buildTarget}.`);
};
exports.getProjectTargetOptions = getProjectTargetOptions;
const sortObjectByKeys = (obj) => Object.keys(obj)
    .sort()
    .reduce((result, key) => (result[key] = obj[key]) && result, {});
const addPackageToPackageJson = (host, pkg, version, type = 'dependencies') => {
    if (host.exists('package.json')) {
        const buff = host.read('package.json');
        if (buff) {
            const sourceText = buff.toString('utf-8');
            const json = JSON.parse(sourceText);
            if (!json.devDependencies) {
                json.devDependencies = {};
            }
            if (!json[type][pkg]) {
                json[type][pkg] = version;
                json[type] = sortObjectByKeys(json[type]);
            }
            host.overwrite('package.json', JSON.stringify(json, null, 2));
        }
    }
    return host;
};
exports.addPackageToPackageJson = addPackageToPackageJson;
const addModuleImportToRootModule = (host, moduleName, src, project) => {
    const modulePath = (0, ng_ast_utils_1.getAppModulePath)(host, (0, project_main_file_1.getProjectMainFile)(project));
    (0, exports.addModuleImportToModule)(host, modulePath, moduleName, src);
};
exports.addModuleImportToRootModule = addModuleImportToRootModule;
const addModuleImportToModule = (host, modulePath, moduleName, src) => {
    const moduleSource = (0, exports.getSourceFile)(host, modulePath);
    if (!moduleSource) {
        throw new schematics_1.SchematicsException(`Module not found: ${modulePath}`);
    }
    const changes = (0, ast_utils_1.addImportToModule)(moduleSource, modulePath, moduleName, src);
    const recorder = host.beginUpdate(modulePath);
    changes.forEach((change) => {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    });
    host.commitUpdate(recorder);
};
exports.addModuleImportToModule = addModuleImportToModule;
const getSourceFile = (host, path) => {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    const content = buffer.toString();
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
};
exports.getSourceFile = getSourceFile;
const getWorkspacePath = (host) => {
    const possibleFiles = ['/angular.json', '/.angular.json'];
    const path = possibleFiles.filter((filePath) => host.exists(filePath))[0];
    return path;
};
exports.getWorkspacePath = getWorkspacePath;
const getWorkspace = (host) => {
    const path = (0, exports.getWorkspacePath)(host);
    const configBuffer = host.read(path);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException(`Could not find (${path})`);
    }
    const content = configBuffer.toString();
    return (0, jsonc_parser_1.parse)(content);
};
exports.getWorkspace = getWorkspace;
//# sourceMappingURL=index.js.map