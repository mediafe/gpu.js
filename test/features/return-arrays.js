const { assert, skip, test, module: describe, only } = require('qunit');
const { GPU } = require('../../src');

describe('features: return arrays');

function returnArray2FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2];
  }, { output: [1], precision: 'single' });
  const result = kernel();
  assert.deepEqual(result.map(v => Array.from(v)), [[1, 2]]);
  gpu.destroy();
}

test('return Array(2) from kernel auto', () => {
  returnArray2FromKernel();
});

test('return Array(2) from kernel gpu', () => {
  returnArray2FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array(2) from kernel webgl', () => {
  returnArray2FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array(2) from kernel webgl2', () => {
  returnArray2FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array(2) from kernel headlessgl', () => {
  returnArray2FromKernel('headlessgl');
});

test('return Array(2) from kernel cpu', () => {
  returnArray2FromKernel('cpu');
});

function returnArray2D2FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2];
  }, { output: [2, 2], precision: 'single' });
  const result = kernel();
  assert.deepEqual(result.map(matrix => matrix.map(row => Array.from(row))), [[[1, 2], [1, 2]],[[1, 2], [1, 2]]]);
  gpu.destroy();
}

test('return Array2D(2) from kernel auto', () => {
  returnArray2D2FromKernel();
});

test('return Array2D(2) from kernel gpu', () => {
  returnArray2D2FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array2D(2) from kernel webgl', () => {
  returnArray2D2FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array2D(2) from kernel webgl2', () => {
  returnArray2D2FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array2D(2) from kernel headlessgl', () => {
  returnArray2D2FromKernel('headlessgl');
});

test('return Array2D(2) from kernel cpu', () => {
  returnArray2D2FromKernel('cpu');
});

function returnArray3D2FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2];
  }, { output: [2, 2, 2], precision: 'single' });
  const result = kernel();
  assert.deepEqual(result.map(cube => cube.map(matrix => matrix.map(row => Array.from(row)))), [[[[1, 2], [1, 2]],[[1, 2], [1, 2]]],[[[1, 2], [1, 2]],[[1, 2], [1, 2]]]]);
  gpu.destroy();
}

test('return Array3D(2) from kernel auto', () => {
  returnArray3D2FromKernel();
});

test('return Array3D(2) from kernel gpu', () => {
  returnArray3D2FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array3D(2) from kernel webgl', () => {
  returnArray3D2FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array3D(2) from kernel webgl2', () => {
  returnArray3D2FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array3D(2) from kernel headlessgl', () => {
  returnArray3D2FromKernel('headlessgl');
});

test('return Array3D(2) from kernel cpu', () => {
  returnArray3D2FromKernel('cpu');
});


function returnArray3FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2, 3];
  }, { output: [1], precision: 'single' });
  const result = kernel();
  assert.deepEqual(Array.from(result.map(v => Array.from(v))), [[1, 2, 3]]);
  gpu.destroy();
}

test('return Array(3) from kernel auto', () => {
  returnArray3FromKernel();
});

test('return Array(3) from kernel gpu', () => {
  returnArray3FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array(3) from kernel webgl', () => {
  returnArray3FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array(3) from kernel webgl2', () => {
  returnArray3FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array(3) from kernel headlessgl', () => {
  returnArray3FromKernel('headlessgl');
});

test('return Array(3) from kernel cpu', () => {
  returnArray3FromKernel('cpu');
});

function returnArray2D3FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2, 3];
  }, { output: [2,2], precision: 'single' });
  const result = kernel();
  assert.deepEqual(Array.from(result.map(matrix => matrix.map(row => Array.from(row)))), [[[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3]]]);
  gpu.destroy();
}

test('return Array2D(3) from kernel auto', () => {
  returnArray2D3FromKernel();
});

test('return Array2D(3) from kernel gpu', () => {
  returnArray2D3FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array2D(3) from kernel webgl', () => {
  returnArray2D3FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array2D(3) from kernel webgl2', () => {
  returnArray2D3FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array2D(3) from kernel headlessgl', () => {
  returnArray2D3FromKernel('headlessgl');
});

test('return Array2D(3) from kernel cpu', () => {
  returnArray2D3FromKernel('cpu');
});

function returnArray3D3FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2, 3];
  }, { output: [2,2,2], precision: 'single' });
  const result = kernel();
  assert.deepEqual(Array.from(result.map(cube => cube.map(matrix => matrix.map(row => Array.from(row))))), [[[[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3]]],[[[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3]]]]);
  gpu.destroy();
}

test('return Array3D(3) from kernel auto', () => {
  returnArray3D3FromKernel();
});

test('return Array3D(3) from kernel gpu', () => {
  returnArray3D3FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array3D(3) from kernel webgl', () => {
  returnArray3D3FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array3D(3) from kernel webgl2', () => {
  returnArray3D3FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array3D(3) from kernel headlessgl', () => {
  returnArray3D3FromKernel('headlessgl');
});

test('return Array3D(3) from kernel cpu', () => {
  returnArray3D3FromKernel('cpu');
});

function returnArray4FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2, 3, 4];
  }, { output: [1], precision: 'single' });
  const result = kernel();
  assert.deepEqual(result.map(v => Array.from(v)), [[1, 2, 3, 4]]);
  gpu.destroy();
}

test('return Array(4) from kernel auto', () => {
  returnArray4FromKernel();
});

test('return Array(4) from kernel gpu', () => {
  returnArray4FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array(4) from kernel webgl', () => {
  returnArray4FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array(4) from kernel webgl2', () => {
  returnArray4FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array(4) from kernel headlessgl', () => {
  returnArray4FromKernel('headlessgl');
});

test('return Array(4) from kernel cpu', () => {
  returnArray4FromKernel('cpu');
});

function returnArray2D4FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2, 3, 4];
  }, { output: [2,2], precision: 'single' });
  const result = kernel();
  assert.deepEqual(result.map(matrix => matrix.map(row => Array.from(row))), [[[1, 2, 3, 4],[1, 2, 3, 4]],[[1, 2, 3, 4],[1, 2, 3, 4]]]);
  gpu.destroy();
}

test('return Array2D(4) from kernel auto', () => {
  returnArray2D4FromKernel();
});

test('return Array2D(4) from kernel gpu', () => {
  returnArray2D4FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array2D(4) from kernel webgl', () => {
  returnArray2D4FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array2D(4) from kernel webgl2', () => {
  returnArray2D4FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array2D(4) from kernel headlessgl', () => {
  returnArray2D4FromKernel('headlessgl');
});

test('return Array2D(4) from kernel cpu', () => {
  returnArray2D4FromKernel('cpu');
});

function returnArray3D4FromKernel(mode) {
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function() {
    return [1, 2, 3, 4];
  }, { output: [2,2,2], precision: 'single' });
  const result = kernel();
  assert.deepEqual(result.map(cube => cube.map(matrix => matrix.map(row => Array.from(row)))), [[[[1, 2, 3, 4],[1, 2, 3, 4]],[[1, 2, 3, 4],[1, 2, 3, 4]]],[[[1, 2, 3, 4],[1, 2, 3, 4]],[[1, 2, 3, 4],[1, 2, 3, 4]]]]);
  gpu.destroy();
}

test('return Array3D(4) from kernel auto', () => {
  returnArray3D4FromKernel();
});

test('return Array3D(4) from kernel gpu', () => {
  returnArray3D4FromKernel('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array3D(4) from kernel webgl', () => {
  returnArray3D4FromKernel('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array3D(4) from kernel webgl2', () => {
  returnArray3D4FromKernel('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array3D(4) from kernel headlessgl', () => {
  returnArray3D4FromKernel('headlessgl');
});

test('return Array3D(4) from kernel cpu', () => {
  returnArray3D4FromKernel('cpu');
});

function returnArray2FromKernelVariables33Length(mode) {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
  const sixteen = new Uint16Array(array);
  const eight = new Uint8Array(array);
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function(v1, v2) {
    return [v1[this.thread.x], v2[this.thread.x]];
  }, { output: [33] });
  const result = kernel(sixteen, eight);
  assert.deepEqual(result.map(v => Array.from(v)), array.map(v => [v,v]));
  gpu.destroy();
}

test('return Array(2) from kernel variables 33 in length auto', () => {
  returnArray2FromKernelVariables33Length();
});

(GPU.isGPUSupported ? test : skip)('return Array(2) from kernel variables 33 in length gpu', () => {
  returnArray2FromKernelVariables33Length('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array(2) from kernel variables 33 in length webgl', () => {
  returnArray2FromKernelVariables33Length('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array(2) from kernel variables 33 in length webgl2', () => {
  returnArray2FromKernelVariables33Length('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array(2) from kernel variables 33 in length headlessgl', () => {
  returnArray2FromKernelVariables33Length('headlessgl');
});

test('return Array(2) from kernel variables 33 in length cpu', () => {
  returnArray2FromKernelVariables33Length('cpu');
});


function returnArray3FromKernelVariables33Length(mode) {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
  const thirtyTwo = new Float32Array(array);
  const sixteen = new Uint16Array(array);
  const eight = new Uint8Array(array);
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function(v1, v2, v3) {
    return [v1[this.thread.x], v2[this.thread.x], v3[this.thread.x]];
  }, { output: [33] });
  const result = kernel(thirtyTwo, sixteen, eight);
  assert.deepEqual(result.map(v => Array.from(v)), array.map(v => [v,v,v]));
  gpu.destroy();
}

test('return Array(3) from kernel variables 33 in length auto', () => {
  returnArray3FromKernelVariables33Length();
});

(GPU.isGPUSupported ? test : skip)('return Array(3) from kernel variables 33 in length gpu', () => {
  returnArray3FromKernelVariables33Length('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array(3) from kernel variables 33 in length webgl', () => {
  returnArray3FromKernelVariables33Length('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array(3) from kernel variables 33 in length webgl2', () => {
  returnArray3FromKernelVariables33Length('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array(3) from kernel variables 33 in length headlessgl', () => {
  returnArray3FromKernelVariables33Length('headlessgl');
});

test('return Array(3) from kernel variables 33 in length cpu', () => {
  returnArray3FromKernelVariables33Length('cpu');
});


function returnArray4FromKernelVariables33Length(mode) {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
  const thirtyTwo = new Float32Array(array);
  const sixteen = new Uint16Array(array);
  const eight = new Uint8Array(array);
  const gpu = new GPU({ mode });
  const kernel = gpu.createKernel(function(v1, v2, v3, v4) {
    return [v1[this.thread.x], v2[this.thread.x], v3[this.thread.x], v4[this.thread.x]];
  }, { output: [33] });
  const result = kernel(array, thirtyTwo, sixteen, eight);
  assert.deepEqual(result.map(v => Array.from(v)), array.map(v => [v,v,v,v]));
  gpu.destroy();
}

test('return Array(4) from kernel variables 33 in length auto', () => {
  returnArray4FromKernelVariables33Length();
});

(GPU.isGPUSupported ? test : skip)('return Array(4) from kernel variables 33 in length gpu', () => {
  returnArray4FromKernelVariables33Length('gpu');
});

(GPU.isWebGLSupported ? test : skip)('return Array(4) from kernel variables 33 in length webgl', () => {
  returnArray4FromKernelVariables33Length('webgl');
});

(GPU.isWebGL2Supported ? test : skip)('return Array(4) from kernel variables 33 in length webgl2', () => {
  returnArray4FromKernelVariables33Length('webgl2');
});

(GPU.isHeadlessGLSupported ? test : skip)('return Array(4) from kernel variables 33 in length headlessgl', () => {
  returnArray4FromKernelVariables33Length('headlessgl');
});

test('return Array(4) from kernel variables 33 in length cpu', () => {
  returnArray4FromKernelVariables33Length('cpu');
});
