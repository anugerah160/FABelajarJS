function fibonacci(n) {
  if(n==0){
    return [0];
  }else if(n==1){
    return [0, 1];
  }else{
    let fib = fibonacci(n - 1);
        fib.push(fib[n - 1] + fib[n - 2]);
        return fib;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
