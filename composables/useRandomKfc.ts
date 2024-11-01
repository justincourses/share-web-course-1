export const useRandomKfc = () => {
  // 创建全局状态
  const randomKfcNumber = useState('randomKfcNumber', () => Math.random())

  // 刷新方法
  const refreshRandomKfc = () => {
    randomKfcNumber.value = Math.random()
  }

  return {
    randomKfcNumber,
    refreshRandomKfc
  }
}
